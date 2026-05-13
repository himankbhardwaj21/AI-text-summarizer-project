const multer = require("multer");
const pdfParse = require("pdf-parse");
const fs = require("fs");

const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
const upload = multer({
  dest: "uploads/",
});

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.post("/summarize", upload.single("file"), async (req, res) => {

  try {

    let text = req.body.text;

if (req.file) {

  const dataBuffer = fs.readFileSync(req.file.path);

  const pdfData = await pdfParse(dataBuffer);

  text = pdfData.text;
}

    if (!text) {
      return res.status(400).json({
        error: "Text is required",
      });
    }

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",

        messages: [
          {
            role: "system",
            content: "Summarize the given text in short and simple form."
          },
          {
            role: "user",
            content: text
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const summary =
      response.data.choices[0].message.content;

    res.json({
      success: true,
      summary: summary,
    });

  } catch (error) {

    console.log(
      error.response?.data || error.message
    );

    res.status(500).json({
      success: false,
      error: "Failed to generate summary",
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
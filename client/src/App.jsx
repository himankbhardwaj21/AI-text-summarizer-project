import { useState } from "react";
import axios from "axios";

function App() {

  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const handleSummarize = async () => {

    try {

      if (!text && !file) {

  alert("Please enter text or upload PDF");

  return;
}

      setLoading(true);

      const formData = new FormData();

formData.append("text", text);

if (file) {
  formData.append("file", file);
}

const response = await axios.post(
  "http://localhost:5000/summarize",
  formData,
  {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }
);

      setSummary(response.data.summary);

    } catch (error) {

      console.log(error);

      alert("Error generating summary");

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center p-6">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-4xl">

        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          AI Text Summarizer
        </h1>

        <textarea
          placeholder="Enter your text here..."
          className="w-full border border-gray-300 rounded-lg p-4 h-56 outline-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <p className="text-sm text-gray-500 mt-2">
  Characters: {text.length}
</p>

        <div className="mt-4">
  <label className="block mb-2 font-medium">
    Upload PDF File
  </label>

  <input
    type="file"
    accept=".pdf"
    onChange={(e) => setFile(e.target.files[0])}
    className="border p-2 rounded-lg bg-white"
  />
</div>

        <button
          onClick={handleSummarize}
          className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-6 py-3 rounded-lg mt-4"
        >
          {loading ? "Generating Summary..." : "Summarize"}
        </button>

        <button
  onClick={() => {
    setText("");
    setSummary("");
    setFile(null);
  }}
  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg mt-4 ml-4"
>
  Clear
</button>

        <div className="mt-8">

          <h2 className="text-2xl font-semibold mb-3">
            Summary
          </h2>

          <div className="bg-gray-100 p-5 rounded-xl border border-gray-300 min-h-[150px] whitespace-pre-wrap">

            {summary
              ? summary
              : "Your summarized text will appear here..."
            }

          </div>
        </div>
        <button
  onClick={() => {
    navigator.clipboard.writeText(summary);

    alert("Summary copied");
  }}
  className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg mt-4"
>
  Copy Summary
</button>
      </div>
    </div>
  );
}

export default App;
# AI-Based Text Summarization Platform

## Project Overview

This project is a web-based AI text summarization platform developed using React.js, Node.js, and OpenRouter AI API.

The system allows users to:
- Enter large text manually
- Upload PDF documents
- Generate summarized content using AI

The project demonstrates concepts of:
- Full-stack web development
- API integration
- Natural Language Processing (NLP)
- PDF text extraction

---

## Features

- Text summarization
- PDF upload support
- AI-generated summaries
- Responsive user interface
- Copy summary feature
- Clear text functionality
- Character counter
- Error handling

---

## Technologies Used

### Frontend
- React.js
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js

### AI Integration
- OpenRouter API
- GPT-3.5 Turbo Model

### Additional Libraries
- multer
- pdf-parse
- cors
- dotenv

---

## Project Structure

AI-Text-Summarizer

├── client  
├── server  
├── README.md

---

## Installation Steps

### 1. Clone Repository

```bash
git clone <repository-link>
```

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

### 3. Install Backend Dependencies

```bash
cd server
npm install
```

### 4. Create Environment File

Create `.env` file inside server folder.

```env
OPENROUTER_API_KEY=your_api_key
```

### 5. Run Backend

```bash
cd server
npm run dev
```

### 6. Run Frontend

```bash
cd client
npm run dev
```

---

## How It Works

1. User enters text or uploads PDF
2. Frontend sends data to backend
3. Backend extracts PDF text
4. Text is sent to AI model
5. AI generates summarized content
6. Summary is displayed on frontend

---

## Future Improvements

- Multi-language summarization
- Download summary as PDF
- User authentication
- Chat with PDF
- Summary length customization

---

## Learning Outcomes

By completing this project, I learned:
- React frontend development
- Backend API development
- AI API integration
- PDF file handling
- NLP-based applications

---

## Author

Developed as a BTech mini project.
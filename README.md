# Keingkrai Buakeaw - Portfolio

A professional, modern portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases my software development projects, technical skills, and features an interactive AI-powered chatbot.

## 🚀 Features

- **Interactive AI Chatbot:** Built using Google Gemini and Groq SDK to answer questions about my background and projects.
- **Dynamic Project Gallery:** Showcases various projects ranging from Stock Automation to Machine Learning and Web Applications.
- **Modern UI/UX:** Clean, dark-themed design with a focus on readability and smooth transitions.
- **Fully Responsive:** Optimized for all devices from mobile to desktop.
- **Typed Data:** Leverages TypeScript for robust data management in projects and knowledge bases.

## 🛠️ Tech Stack

- **Frontend:** [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **AI Integration:** [Google Generative AI (Gemini)](https://ai.google.dev/), [Groq SDK](https://groq.com/)
- **Package Manager:** [Bun](https://bun.sh/) (or NPM/Yarn)

## 📁 Project Structure

```text
src/
├── components/     # Reusable UI components (ChatBot, ProjectCard, etc.)
├── data/           # Project data and chatbot knowledge base
├── sections/       # Main layout sections (Hero, Projects, Contact)
├── utils/          # Utility functions and AI chatbot logic
├── App.tsx         # Root component
└── main.tsx        # Entry point
public/             # Static assets (images, resume)
```

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Bun](https://bun.sh/) (Recommended) or NPM

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/keingkrai/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key
   VITE_GROQ_API_KEY=your_groq_api_key
   ```

### Development

Run the development server:
```bash
bun dev
# or
npm run dev
```

### Build

Build the project for production:
```bash
bun build
# or
npm run build
```

## 📄 License

This project is private and for portfolio purposes. Please contact the author for any usage inquiries.

---

Built with ❤️ by [Keingkrai Buakeaw](https://github.com/keingkrai)

# 🃏 Flash Cards App

A minimal React-based flashcard app to help you study effectively with a clean interface, progress bar, and intuitive navigation.

## ✨ Features

- ✅ Toggle between questions and answers  
- ✅ Navigate through flashcards with **Next** and **Previous** buttons  
- ✅ Track your progress with a dynamic progress bar  
- ✅ Easily customize questions via JSON  


## 📦 Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```
git clone https://github.com/mystic-06/Flash-Cards-App
cd flash-cards-app
```
### 2. Install Dependencies
```
npm install
```

3. Start the Development Server
```
npm run dev
```
This project uses React and is optimized for development using Vite. Ensure Node.js and npm are installed on your machine.

## 🧠 Project Structure
```
flash-cards-app/
│
├── assets/
│   └── questions.json         # List of question-answer pairs
│
├── Card.jsx                   # Card component to display Q/A and navigation
├── ProgressBar.jsx            # Component showing progress status
├── App.jsx                    # Main component managing state and rendering cards
├── index.html
├── main.jsx
└── ...
```

## 🛠 How to Customize Questions

Update the assets/questions.json file with your own questions and answers:
```
[
  {
    "question": "What is the capital of France?",
    "answer": "Paris"
  },
  {
    "question": "What is 2 + 2?",
    "answer": "4"
  }
]
```
Each object in the array represents one flashcard.

## 🧰 Tech Stack
- React

- JavaScript (ES6+)

- Vite (for development)

- JSON (for data storage)

## 📄 License

This is a personal project made for learning purposes.  
Feel free to fork or build upon it, but credit is appreciated!

## 👤 Author
Created by Dhruv Sharma
Feel free to reach out or connect on 

## 📬 Contact
If you have any questions, suggestions, or just want to say hi – feel free to reach out!

- GitHub: [@mystic-06](https://github.com/mystic-06)
- LinkedIn: [Dhruv Sharma](https://www.linkedin.com//in/dhruv-sharma-1742b4321/)

---

_Thanks for checking out the project!_

import React, { useState } from "react";
import "./App.css"; // Make sure this line is present

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correctAnswer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="app-container">
      <div className="quiz-box">
        <h1 className="title">🧠 Quiz Time!</h1>

        {showResult ? (
          <div className="result">
            <h2 className="score">
              🎉 Your Score: {score} / {quizData.length}
            </h2>
            <p className="message">Great job!</p>
          </div>
        ) : (
          <div>
            <h3 className="question">
              Q{currentQuestion + 1}. {quizData[currentQuestion].question}
            </h3>
            <ul className="options">
              {quizData[currentQuestion].options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`option ${
                    selectedOption === option ? "selected" : ""
                  }`}
                >
                  {option}
                </li>
              ))}
            </ul>
            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className={`next-button ${!selectedOption ? "disabled" : ""}`}
            >
              {currentQuestion + 1 === quizData.length ? "Finish" : "Next"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import questions from "../../data/questions";
import QuestionCard from "../../components/QuestionCard";
import Timer from "../../components/Timer";
import Navbar from "../../components/Navbar";

import { getUser, saveUser } from "../../utils/localStorage";

import "./Exam.scss";

function Exam() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState(
    Array(questions.length).fill("")
  );

  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    try {
      console.log("Submit button clicked");

      let score = 0;

      questions.forEach((question, index) => {
        if (answers[index] === question.answer) {
          score++;
        }
      });

      console.log("Score:", score);

      localStorage.setItem(
        "examResult",
        JSON.stringify({
          totalQuestions: questions.length,
          correctAnswers: score,
          wrongAnswers: questions.length - score,
          score,
          answers,
        })
      );

      console.log("Exam result saved");

      const user = getUser();

      if (user) {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const updatedUsers = users.map((u) => {
          if (u.email === user.email) {
            return {
              ...u,
              score: (u.score || 0) + score,
              examsTaken: (u.examsTaken || 0) + 1,
            };
          }
          return u;
        });

        localStorage.setItem("users", JSON.stringify(updatedUsers));

        const updatedUser = {
          ...user,
          score: (user.score || 0) + score,
          examsTaken: (user.examsTaken || 0) + 1,
        };

        saveUser(updatedUser);
      }

      console.log("Navigating to Result Page...");

      navigate("/result");
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      alert(error.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="exam-container">
        <h1 className="exam-title">Online Examination</h1>

        <Timer
          duration={600}
          onTimeUp={handleSubmit}
        />

        <QuestionCard
          question={questions[currentQuestion]}
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          selectedAnswer={answers[currentQuestion]}
          onAnswerSelect={handleAnswerSelect}
        />

        <div className="question-indicator">
          {questions.map((question, index) => (
            <button
              key={question.id}
              className={
                currentQuestion === index
                  ? "active-question"
                  : answers[index]
                  ? "answered-question"
                  : "question-number"
              }
              onClick={() => setCurrentQuestion(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="exam-buttons">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="previous-btn"
          >
            Previous
          </button>

          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="submit-btn"
            >
              Submit Exam
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="next-btn"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Exam;
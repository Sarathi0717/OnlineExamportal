import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionCard from "../../components/QuestionCard";
import Timer from "../../components/Timer";
import Navbar from "../../components/Navbar";
import exams from "../../data/exams";
import { getUser, saveUser } from "../../utils/localStorage";
import "./Exam.scss";

function Exam() {
  const navigate = useNavigate();
  const { id } = useParams();

  console.log("Route id:", id);
  console.log("Exams:", exams);

  const selectedExam = exams.find(
    (item) => item.id === Number(id)
  );

  console.log("Selected Exam:", selectedExam);

  if (!selectedExam) {
    return (
      <div className="exam-container">
        <h1>Exam Not Found</h1>
      </div>
    );
  }

  // Correct
  const questions = selectedExam.questions;

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
    let score = 0;

    questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        score++;
      }
    });

    localStorage.setItem(
      "examResult",
      JSON.stringify({
        examTitle: selectedExam.title,
        totalQuestions: questions.length,
        correctAnswers: score,
        wrongAnswers: questions.length - score,
        score,
        answers,
      })
    );

    const user = getUser();

    if (user) {
      const users =
        JSON.parse(localStorage.getItem("users")) || [];

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

      localStorage.setItem(
        "users",
        JSON.stringify(updatedUsers)
      );

      saveUser({
        ...user,
        score: (user.score || 0) + score,
        examsTaken: (user.examsTaken || 0) + 1,
      });
    }

    navigate("/result");
  };

  return (
    <>
      <Navbar />

      <div className="exam-container">

        <h1 className="exam-title">
          {selectedExam.title}
        </h1>

        <Timer
          duration={selectedExam.duration}
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
            className="previous-btn"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>

          {currentQuestion === questions.length - 1 ? (
            <button
              className="submit-btn"
              onClick={handleSubmit}
            >
              Submit Exam
            </button>
          ) : (
            <button
              className="next-btn"
              onClick={handleNext}
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
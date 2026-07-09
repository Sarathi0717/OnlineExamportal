import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaPercentage,
  FaTrophy,
  FaRedo,
  FaHome,
  FaUserGraduate,
} from "react-icons/fa";
import './ResultCard.scss';

function ResultCard({
  studentName,
  totalQuestions,
  correctAnswers,
  wrongAnswers,
  score,
}) {
  const navigate = useNavigate();

  const percentage = Math.round(
    (correctAnswers / totalQuestions) * 100
  );

  const result =
    percentage >= 50 ? "PASS" : "FAIL";

  return (
    <div className="result-card">

      <h1>Exam Result</h1>

      <div className="student-details">
        <FaUserGraduate className="icon" />
        <h2>{studentName}</h2>
      </div>

      <div className="result-info">

        <div className="info-box">
          <FaTrophy className="icon trophy" />
          <h3>Total Questions</h3>
          <p>{totalQuestions}</p>
        </div>

        <div className="info-box">
          <FaCheckCircle className="icon success" />
          <h3>Correct Answers</h3>
          <p>{correctAnswers}</p>
        </div>

        <div className="info-box">
          <FaTimesCircle className="icon danger" />
          <h3>Wrong Answers</h3>
          <p>{wrongAnswers}</p>
        </div>

        <div className="info-box">
          <FaPercentage className="icon percent" />
          <h3>Percentage</h3>
          <p>{percentage}%</p>
        </div>

        <div className="info-box">
          <FaTrophy className="icon trophy" />
          <h3>Score</h3>
          <p>
            {score} / {totalQuestions}
          </p>
        </div>

      </div>

      <div className="status">

        {result === "PASS" ? (
          <h2 className="pass">
            🎉 Congratulations! You Passed
          </h2>
        ) : (
          <h2 className="fail">
            ❌ Better Luck Next Time
          </h2>
        )}

      </div>

      <div className="buttons">

        <button
          className="retry-btn"
          onClick={() => navigate("/exam")}
        >
          <FaRedo />
          Retry Exam
        </button>

        <button
          className="home-btn"
          onClick={() => navigate("/dashboard")}
        >
          <FaHome />
          Dashboard
        </button>

      </div>

    </div>
  );
}

export default ResultCard;
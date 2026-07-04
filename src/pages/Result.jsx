import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import ResultCard from "../components/ResultCard";
import { getUser } from "../utils/localStorage";

function Result() {
  const user = getUser();

  const result = JSON.parse(localStorage.getItem("examResult"));

if (!result) {
  return <Navigate to="/exam" replace />;
}

  return (
    <>
      <Navbar />

      <div className="result-page">

        <Sidebar />

        <div className="result-content">

          <ResultCard
            studentName={user?.name || "Student"}
            totalQuestions={result.totalQuestions}
            correctAnswers={result.correctAnswers}
            wrongAnswers={result.wrongAnswers}
            score={result.score}
          />

        </div>

      </div>
    </>
  );
}

export default Result;
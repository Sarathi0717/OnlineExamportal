import React from "react";

function QuestionCard({
  question,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
}) {
  if (!question) return null;

  return (
    <div className="question-card">
      {/* Header */}
      <div className="question-header">
        <h3>
          Question {currentQuestion + 1} / {totalQuestions}
        </h3>
      </div>

      {/* Question Text */}
      <div className="question-text">
        <p>{question.question}</p>
      </div>

      {/* Options */}
      <div className="options">
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`option ${
              selectedAnswer === option ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name={`question-${currentQuestion}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onAnswerSelect(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
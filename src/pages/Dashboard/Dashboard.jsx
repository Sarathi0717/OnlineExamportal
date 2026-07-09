import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaClipboardList,
  FaTrophy,
  FaSignOutAlt,
} from "react-icons/fa";

import { getUser, logoutUser } from "../../utils/localStorage";
import "./Dashboard.scss";

function Dashboard() {
  const navigate = useNavigate();

  const user = getUser();

  const exams = [
    {
      id: 1,
      title: "Java Quiz",
      questions: 10,
      duration: "5 Minutes",
      marks: 20,
    },
    {
      id: 2,
      title: "React Quiz",
      questions: 10,
      duration: "5 Minutes",
      marks: 20,
    },
    {
      id: 3,
      title: "JavaScript Quiz",
      questions: 10,
      duration: "5 Minutes",
      marks: 20,
    },
  ];

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="dashboard">

      <header className="dashboard-header">

        <h2>Online Examination System</h2>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          <FaSignOutAlt /> Logout
        </button>

      </header>

      <div className="dashboard-content">

        <div className="welcome-card">

          <h2>
            <FaUserCircle className="user-icon" />
            Welcome {user ? user.name : "Student"}
          </h2>

          <p>Email : {user?.email}</p>

        </div>

        <div className="stats">

          <div className="stat-card">

            <FaClipboardList
              size={35}
              color="#2563eb"
            />

            <h3>Available Exams</h3>

            <h1>{exams.length}</h1>

          </div>

          <div className="stat-card">

            <FaTrophy
              size={35}
              color="#f59e0b"
            />

            <h3>Completed Exams</h3>

            <h1>0</h1>

          </div>

        </div>

        <h2 className="section-title">
          Available Exams
        </h2>

        <div className="exam-grid">

          {exams.map((exam) => (

            <div
              className="exam-card"
              key={exam.id}
            >

              <h2>{exam.title}</h2>

              <p>
                <strong>Questions :</strong>{" "}
                {exam.questions}
              </p>

              <p>
                <strong>Duration :</strong>{" "}
                {exam.duration}
              </p>

              <p>
                <strong>Total Marks :</strong>{" "}
                {exam.marks}
              </p>

              <button
                className="start-btn"
                onClick={() =>
                  navigate(`/exam/${exam.id}`)
                }
              >
                Start Exam
              </button>

            </div>

          ))}

        </div>

        <div className="bottom-buttons">

          <button
            className="leaderboard-btn"
            onClick={() =>
              navigate("/leaderboard")
            }
          >
            Leaderboard
          </button>

          <button
            className="profile-btn"
            onClick={() =>
              navigate("/profile")
            }
          >
            Profile
          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
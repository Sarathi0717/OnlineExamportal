import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaClipboardList,
  FaTrophy,
  FaSignOutAlt,
} from "react-icons/fa";

import { getUser, logoutUser } from "../utils/localStorage";

function Dashboard() {
  const navigate = useNavigate();

  const user = getUser();

  const exams = [
    {
      id: 1,
      title: "Java Quiz",
      questions: 10,
      duration: "10 Minutes",
      marks: 100,
    },
    {
      id: 2,
      title: "React Quiz",
      questions: 10,
      duration: "10 Minutes",
      marks: 100,
    },
    {
      id: 3,
      title: "JavaScript Quiz",
      questions: 10,
      duration: "10 Minutes",
      marks: 100,
    },
  ];

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div
      style={{
        background: "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      {/* Header */}

      <header
        style={{
          background: "#1976d2",
          color: "#fff",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Online Examination System</h2>

        <button
          onClick={handleLogout}
          style={{
            background: "red",
            color: "white",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          <FaSignOutAlt /> Logout
        </button>
      </header>

      {/* Welcome */}

      <div
        style={{
          padding: "30px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "30px",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>
            <FaUserCircle color="#1976d2" /> Welcome{" "}
            {user ? user.name : "Student"}
          </h2>

          <p>Email : {user?.email}</p>
        </div>

        {/* Cards */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "40px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1",
              minWidth: "220px",
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 2px 10px rgba(0,0,0,.1)",
            }}
          >
            <FaClipboardList
              size={35}
              color="#2196f3"
            />

            <h3>Available Exams</h3>

            <h1>{exams.length}</h1>
          </div>

          <div
            style={{
              flex: "1",
              minWidth: "220px",
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 2px 10px rgba(0,0,0,.1)",
            }}
          >
            <FaTrophy
              size={35}
              color="orange"
            />

            <h3>Completed Exams</h3>

            <h1>0</h1>
          </div>
        </div>

        {/* Exam List */}

        <h2>Available Exams</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
          }}
        >
          {exams.map((exam) => (
            <div
              key={exam.id}
              style={{
                background: "#fff",
                borderRadius: "10px",
                padding: "20px",
                boxShadow:
                  "0px 2px 10px rgba(0,0,0,.1)",
              }}
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
                onClick={() =>
                  navigate("/exam", {
                    state: exam,
                  })
                }
                style={{
                  marginTop: "15px",
                  width: "100%",
                  padding: "12px",
                  background: "#1976d2",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Start Exam
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Buttons */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "40px",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => navigate("/leaderboard")}
            style={{
              padding: "12px 30px",
              background: "green",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Leaderboard
          </button>

          <button
            onClick={() => navigate("/profile")}
            style={{
              padding: "12px 30px",
              background: "#ff9800",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
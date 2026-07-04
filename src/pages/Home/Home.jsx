import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";
import "./Home.scss";

function Home() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("accessToken");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="home">
      <div className="overlay">
        <div className="content">
          <h1>Welcome to LEGEND'S Online Exam portal</h1>

          <p>
           # IF YOU CAN DREAM IT YOU CAN DO IT.*!
          </p>

          <div className="buttons">
            <button onClick={() => navigate("/profile")}>
              Profile
            </button>

            <button onClick={() => navigate("/about")}>
              About
            </button>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
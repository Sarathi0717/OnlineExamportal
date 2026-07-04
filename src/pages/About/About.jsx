import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar";
import "./About.scss";
function About() {
  return (
    <div className="about-page">
     <Navbar />

      <div className="about-content">

        <div className="about-card">

          <h1>About Online Examination Portal</h1>

          <p className="intro">
            The Online Examination Portal is a web-based application designed
            to conduct examinations in a secure, efficient, and user-friendly
            manner. Students can attend exams from anywhere while administrators
            can manage examinations with ease.
          </p>

          <section>
            <h2>🎯 Project Objectives</h2>

            <ul>
              <li>Conduct online examinations efficiently.</li>
              <li>Provide instant score calculation.</li>
              <li>Reduce manual evaluation.</li>
              <li>Maintain student performance records.</li>
              <li>Provide a secure and responsive examination environment.</li>
            </ul>
          </section>

          <section>
            <h2>✨ Features</h2>

            <ul>
              <li>User Registration & Login</li>
              <li>Student Dashboard</li>
              <li>Online MCQ Examination</li>
              <li>Countdown Timer</li>
              <li>Automatic Result Generation</li>
              <li>Leaderboard</li>
              <li>Student Profile</li>
              <li>Score Tracking</li>
              <li>Responsive User Interface</li>
            </ul>
          </section>

          <section>
            <h2>💻 Technologies Used</h2>

            <div className="tech-grid">

              <div className="tech-card">
                <h3>Frontend</h3>
                <p>React.js</p>
                <p>JavaScript (ES6)</p>
                <p>SCSS</p>
                <p>React Router DOM</p>
              </div>

              <div className="tech-card">
                <h3>Backend</h3>
                <p>Firebase Authentication</p>
                <p>Local Storage</p>
              </div>

              <div className="tech-card">
                <h3>Tools</h3>
                <p>VS Code</p>
                <p>Git</p>
                <p>GitHub</p>
                <p>Vite</p>
              </div>

            </div>
          </section>

          <section>
            <h2>📈 Benefits</h2>

            <ul>
              <li>Fast and accurate evaluation.</li>
              <li>Easy access from anywhere.</li>
              <li>Saves time and paperwork.</li>
              <li>Improves examination management.</li>
              <li>Provides instant feedback.</li>
            </ul>
          </section>

          <section>
            <h2>👨‍💻 Developer</h2>

            <p>
              This Online Examination Portal is developed as a React project
              to demonstrate modern web application development using
              React, Firebase Authentication, Local Storage, and SCSS.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}

export default About;
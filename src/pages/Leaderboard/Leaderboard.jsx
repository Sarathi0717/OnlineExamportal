import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { getAllUsers } from "../../utils/localStorage";
import "./Leaderboard.scss";
function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    try {
      const users = getAllUsers();

      const sortedUsers = users
        .map((user) => ({
          ...user,
          score: user.score || 0,
          examsTaken: user.examsTaken || 0,
        }))
        .sort((a, b) => {
          if (b.score !== a.score) {
            return b.score - a.score;
          }
          return b.examsTaken - a.examsTaken;
        });

      setLeaderboard(sortedUsers);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <Navbar />

      <div className="leaderboard-page">

        <Sidebar />

        <div className="leaderboard-content">

          <h1>🏆 Leaderboard</h1>

          {leaderboard.length === 0 ? (
            <div className="no-users">
              <h3>No Users Found</h3>
            </div>
          ) : (
            <table className="leaderboard-table">

              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Score</th>
                  <th>Exams Taken</th>
                </tr>
              </thead>

              <tbody>

                {leaderboard.map((user, index) => (

                  <tr key={user.email}>

                    <td>
                      {index === 0
                        ? "🥇"
                        : index === 1
                        ? "🥈"
                        : index === 2
                        ? "🥉"
                        : index + 1}
                    </td>

                    <td>{user.name}</td>

                    <td>{user.email}</td>

                    <td>{user.score}</td>

                    <td>{user.examsTaken}</td>

                  </tr>

                ))}

              </tbody>

            </table>
          )}

        </div>

      </div>
    </>
  );
}

export default Leaderboard;
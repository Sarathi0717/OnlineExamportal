import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { getUser } from "../../utils/localStorage";
import "./Profile.scss";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getUser();
    setUser(currentUser);
  }, []);

  return (
    <div className="profile-page">
      <Sidebar />

      <div className="profile-content">
        {!user ? (
          <div className="profile-card">
            <h2>User Not Found</h2>
            <p>Please login to view your profile.</p>
          </div>
        ) : (
          <div className="profile-card">
            <div className="profile-image">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Profile"
              />
            </div>

            <h2>{user.name}</h2>

            <p className="role">{user.role || "Student"}</p>

            <div className="profile-details">
              <div className="detail">
                <span>Name</span>
                <strong>{user.name}</strong>
              </div>

              <div className="detail">
                <span>Email</span>
                <strong>{user.email}</strong>
              </div>

              <div className="detail">
                <span>Role</span>
                <strong>{user.role || "Student"}</strong>
              </div>

              <div className="detail">
                <span>Score</span>
                <strong>{user.score ?? 0}</strong>
              </div>

              <div className="detail">
                <span>Exams Taken</span>
                <strong>{user.examsTaken ?? 0}</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
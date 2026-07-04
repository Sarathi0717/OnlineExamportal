// Save logged-in user
export const saveUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

// Get logged-in user
export const getUser = () => {
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
};

// Logout user
export const logoutUser = () => {
  localStorage.removeItem("currentUser");
};

// Get all registered users (IMPORTANT)
export const getAllUsers = () => {
  return JSON.parse(localStorage.getItem("users")) || [];
};

// Save all users
export const saveAllUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};
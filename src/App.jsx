import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Exam from "./pages/Exam/Exam";
import Result from "./pages/Result";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Profile from "./pages/Profile/profile";
import About from "./pages/About/About"
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    
   <Routes>
  {/* Public */}
  <Route path="/" element={<Login />} />
  <Route path="/signup" element={<Signup />} />

  {/* Pages with Layout */}
  <Route element={<Layout />}>
    <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
    <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
    <Route path="/result" element={<ProtectedRoute><Result /></ProtectedRoute>} />
  {/* Separate pages */}
  <Route  path="/exam" element= {<ProtectedRoute><Exam/></ProtectedRoute>} />
  <Route
    path="/exam/1"
    element={<Exam />} />
    <Route
    path="/exam/2"
    element={<Exam />} />
    <Route
    path="/exam/3"
    element={<Exam />} />

  <Route
    path="/about"
    element={
      <ProtectedRoute>
        <About />
      </ProtectedRoute>
    }
  />
  </Route>
</Routes>
</>
  );
}

export default App;
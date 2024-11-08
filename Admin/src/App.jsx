// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import AdminDel from "./components/DeliveryDetail/AdminDel";
import AdminProfile from "./components/AdminProfile";
import AdminMessage from "./components/AdminMessage";
import SenderMatch from "./components/SenderMatch";
import Settings from "./components/Settings";
import TravelerDelDetail from "./components/TravelerDelDetail";
import TravelerMatched from "./components/TravelerMatched";
import DelDetail from "./components/DelDetail";
import User from "./components/User";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/User" element={<User />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Admin-m" element={<AdminMessage />} />
        <Route path="/Admin-l" element={<AdminDel />} />
        <Route path="/dev-d" element={<DelDetail />} />
        <Route path="/Admin-p" element={<AdminProfile />} />
        <Route path="/Tdev-d" element={<TravelerDelDetail />} />
        <Route path="/Sender-M" element={<SenderMatch />} />
        <Route path="/" element={<Admin />} />
        <Route path="/Traveler-M" element={<TravelerMatched />} />
        {/* Add this line */}
      </Routes>
    </Router>
  );
};

export default App;

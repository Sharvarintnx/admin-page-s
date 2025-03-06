import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./Mentor.scss";

function Mentor() {
  return (
    <div className="mentor">
      <div className="home_sidebar">
        <Sidebar />
      </div>

      <div className="mentor_main">
        <Navbar />
      </div>
    </div>
  );
}

export default Mentor;

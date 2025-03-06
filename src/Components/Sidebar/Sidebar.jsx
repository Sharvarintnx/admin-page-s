/* eslint-disable jsx-a11y/no-static-element-interactions */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BarChartIcon from "@mui/icons-material/BarChart";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import TableChartIcon from "@mui/icons-material/TableChart";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ColorContext } from "../../ColorContext/darkContext";
import "./Sidebar.scss";
import Dashboard from "../../assest/Nutanix-Logo-Charcoal-Gray-Digital.svg";
import Dash from "../../assest/Dashboard.svg";
import Usersicon from "../../assest/Person.svg";
import Modules from "../../assest/Modules.svg";
import FeedbackIcon from "../../assest/ProductSupport.svg"
import Schedule from "../../assest/Schedule.svg";
import Setting from "../../assest/Settings.svg";
import Profileset from "../../assest/Profile-settings.svg";
import People from "../../assest/People.svg";
import logout from "../../assest/Authentication.svg";
import Mentor from "../../assest/Community&Support.svg";

function Sidebar() {
  // color state management using react context
  const { darkMode, dispatch } = useContext(ColorContext);

  return (
    <div className="sidebar">
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={Dashboard} alt="logo" />
        </Link>
      </div>

      <div className="links">
        <ul>
          <p className="spann">Main</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <img src={Dash} alt="DashboardIcon" height={32} width={32} />{" "}
              Dashboard
            </li>
          </Link>

          <p className="spann">lists</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <img src={People} alt="DashboardIcon" height={32} width={32} />{" "}
              Users
            </li>
          </Link>

          <Link to="/mentor" style={{ textDecoration: "none" }}>
            <li>
              <img src={Mentor} alt="DashboardIcon" height={32} width={32} />{" "}
              Mentor
            </li>{" "}
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <li>
              <img src={Schedule} alt="DashboardIcon" height={32} width={32} />{" "}
              Schedule
            </li>
          </Link>
          <li>
            <img src={Modules} alt="DashboardIcon" height={32} width={32} />{" "}
            Modules
          </li>
// Feedback option
          <Link to="/feedback" style={{ textDecoration: "none" }}>
            <li>
              <img src={FeedbackIcon} alt="FeedbackIcon" height={32} width={32} />{" "}
                Feedback
            </li>
          </Link>
  
          <p className="spann">Setings</p>
          <li>
            <img src={Usersicon} alt="DashboardIcon" height={32} width={32} />{" "}
            Profile
          </li>
          <li>
            <img src={Profileset} alt="DashboardIcon" height={32} width={32} />{" "}
            Setting
          </li>
          <li>
            <img src={logout} alt="DashboardIcon" height={32} width={32} /> Log
            Out
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

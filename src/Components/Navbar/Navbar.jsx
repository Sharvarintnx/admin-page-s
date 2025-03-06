import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CloseIcon from "@mui/icons-material/Close";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import LanguageIcon from "@mui/icons-material/Language";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import TableChartIcon from "@mui/icons-material/TableChart";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ColorContext } from "../../ColorContext/darkContext";
import "./navbar.scss";
import Dash from "../../assest/Nutanix-Logo-Charcoal-Gray-Digital.svg";
import Usersicon from "../../assest/Person.svg";
import Modules from "../../assest/Modules.svg";
import Schedule from "../../assest/Schedule.svg";
import Setting from "../../assest/Settings.svg";
import Profileset from "../../assest/Profile-settings.svg";
import People from "../../assest/People.svg";
import logout from "../../assest/Authentication.svg";
import Mentor from "../../assest/Community&Support.svg";
import Dashboard from "../../assest/Dashboard.svg";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  // color state management using react context
  const { darkMode, dispatch } = useContext(ColorContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="navbar">
      <div className="navbar_main">
        <div className="menu_logo">
          {toggle ? (
            <CloseIcon className="menu_icon" onClick={handleToggle} />
          ) : (
            <MenuIcon className="menu_icon" onClick={handleToggle} />
          )}
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={Dash} alt="logo" height={32} width={128} />
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={Dash} alt="" />
          </Link>
        </div>

        <div className="item_lists">
          <div className="item item_lan">
            <LanguageIcon className="item_icon" />
            <p>English</p>
          </div>
          <div className="item">
            {!darkMode ? (
              <DarkModeIcon
                className="item_icon"
                onClick={() => dispatch({ type: "TOGGLE" })}
              />
            ) : (
              <LightModeIcon
                className="item_icon white"
                onClick={() => dispatch({ type: "TOGGLE" })}
              />
            )}
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="item_icon" />
            <span className="badge">2</span>
          </div>
          <div className="item">
            <NotificationsNoneIcon className="item_icon" />
            <span className="badge">1</span>
          </div>

          <div className="item">
            <img className="admin_pic" src={Usersicon} alt="admin" />
          </div>
        </div>
      </div>

      <div className="res_navbar">
        {toggle && (
          <div className="res_nav_menu">
            <div className="res_nav_menuu">
              <div className="links">
                <ul>
                  <p className="spann">Main</p>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <li>
                      <img src={Dashboard} alt="user" height={32} width={32} />
                      Dashboard
                    </li>
                  </Link>

                  <p className="spann">lists</p>
                  <Link to="/users" style={{ textDecoration: "none" }}>
                    <li>
                      <img src={Usersicon} alt="user" height={32} width={32} />
                      Users
                    </li>
                  </Link>

                  <Link to="/mentor" style={{ textDecoration: "none" }}>
                    <li>
                      <img src={Mentor} alt="user" height={32} width={32} />
                      Mentor
                    </li>
                  </Link>
                  <Link to="/schedule" style={{ textDecoration: "none" }}>
                    <li>
                      <img src={Schedule} alt="user" height={32} width={32} />
                      Schedule
                    </li>
                  </Link>
                  <li>
                    <img src={Modules} alt="user" height={32} width={32} />
                    Module
                  </li>
                  <li>
                    <img src={Mentor} alt="user" height={32} width={32} />
                    Mentor
                  </li>

                  <p className="spann">Setings</p>
                  <li>
                    <img src={Profileset} alt="user" height={32} width={32} />
                    Profile
                  </li>
                  <li>
                    <img src={Setting} alt="user" height={32} width={32} />{" "}
                    Setting
                  </li>
                  <li>
                    <img src={logout} alt="user" height={32} width={32} /> Log
                    Out
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

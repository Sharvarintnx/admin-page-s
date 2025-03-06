import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import React from "react";
import { Link } from "react-router-dom";
import "./itemlists.scss";
import Module from "../../assest/Modules.svg";
import Dashboard from "../../assest/Nutanix-Logo-Charcoal-Gray-Digital.svg";
import Dash from "../../assest/Dashboard.svg";
import Usersicon from "../../assest/Person.svg";
import Schedule from "../../assest/Schedule.svg";
import Setting from "../../assest/Settings.svg";
import Profileset from "../../assest/Profile-settings.svg";
import People from "../../assest/People.svg";
import logout from "../../assest/Authentication.svg";
import Mentor from "../../assest/Community&Support.svg";
import Storage from "../../assest/IntelligentStorage&Data.svg";

function ItemLists({ type }) {
  let data;

  // Dynamicaly change the ui content
  switch (type) {
    case "user":
      data = {
        title: "Users",
        isMoney: false,
        count: 232,
        icon: <img src={Usersicon} alt="module" height={64} width={64} />,
        link: "See all users",
        linkto: "/users",
      };
      break;
    case "module":
      data = {
        title: "Module",
        isMoney: false,
        count: 34,
        icon: <img src={Module} alt="module" height={64} width={64} />,
        link: "View all Module",
        linkto: "/module",
      };
      break;
    case "schedule":
      data = {
        title: "Schedule",
        isMoney: true,
        count: 107,
        icon: <img src={Schedule} alt="module" height={64} width={64} />,
        link: "See all products",
        linkto: "/schedule",
      };
      break;
    case "DiskSpace":
      data = {
        title: "Disk Space",
        count: 444,
        isMoney: true,
        icon: <img src={Storage} alt="module" height={64} width={64} />,
        link: "See all products",
        linkto: "/",
      };
      break;
    default:
      break;
  }

  return (
    <div className="item_listss">
      <div className="name">
        <p>{data.title}</p>
      </div>

      <div className="counts">{data.count}</div>

      <div className="see_item">
        <Link to={data.linkto}>
          <p>{data.link}</p>
        </Link>
        {data.icon}
      </div>
    </div>
  );
}

export default ItemLists;

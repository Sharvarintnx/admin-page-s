import React from "react";
import ItemLists from "../ItemLists/ItemLists";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import TableList from "../TableList/TableList";
import "./Home.scss";

function Home() {
  //
  return (
    <div className="home">
      <div className="home_sidebar">
        <Sidebar />
      </div>

      <div className="home_main">
        <Navbar />

        <div className="bg_color" />

        <div className="home_items">
          <ItemLists className="home_cards" type="user" />
          <ItemLists className="home_cards" type="module" />
          <ItemLists className="home_cards" type="schedule" />
          <ItemLists className="home_cards" type="DiskSpace" />
        </div>
        <div className="table">
          <div className="title">Schedule</div>
          <TableList />
        </div>
      </div>
    </div>
  );
}

export default Home;

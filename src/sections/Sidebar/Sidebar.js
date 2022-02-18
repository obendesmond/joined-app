import React from "react";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = topic => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      {topic}
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg"
          alt="no photoURL"
        />
        <Avatar
          src={user.photoURL && user.photoURL}
          className="sidebar__avatar"
        >
          {user.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName ? user.displayName : "Anonymous"}</h2>
        <h4>{user.email && user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;

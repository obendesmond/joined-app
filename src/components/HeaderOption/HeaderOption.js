import React from "react";
import "./HeaderOption.css";

import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function HeaderOption({ avatar, title, Icon, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && user && (
        <Avatar className="headerOption__icon" src={user.photoURL}>
          {user.email[0].toUpperCase()}
        </Avatar>
      )}
      {!Icon && !user && <Avatar className="headerOption__icon" />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;

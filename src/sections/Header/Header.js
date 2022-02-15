import React from "react";
import "./Header.css";

// material
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import NotificationsIcon from "@mui/icons-material/Notifications";

import HeaderOption from "../../components/HeaderOption/HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {/* logo */}
        <img
          src="https://img.icons8.com/external-justicon-flat-justicon/452/external-linkedin-social-media-justicon-flat-justicon.png"
          alt=""
        />

        {/* header left section */}
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      {/* header right section */}
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://mui.com/static/images/avatar/2.jpg"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;

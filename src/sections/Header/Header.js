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

import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { getAuth, signOut } from "../../backend/firebase";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // alert("signed out successfully");
      })
      .catch(err => alert(err.message));
  };

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
          <input type="text" placeholder="search" />
        </div>
      </div>

      {/* header right section */}
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar title="me(out)" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;

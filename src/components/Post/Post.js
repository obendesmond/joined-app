import React, { forwardRef } from "react";
// compo
import InputOption from "../InputOption/InputOption";

import { Avatar } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

import "./Post.css";

const Post = forwardRef(({ name, description, message, photoURL }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoURL && photoURL}>{name[0].toUpperCase()}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description} </p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" />
        <InputOption Icon={SendOutlinedIcon} title="Send" />
      </div>
    </div>
  );
});

export default Post;

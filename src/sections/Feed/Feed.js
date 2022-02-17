import React, { useState, useEffect } from "react";

// mui icons
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

// components
import InputOption from "../../components/InputOption/InputOption";
import Post from "../../components/Post/Post";

import { db, serverTimestamp } from "../../backend/firebase";

import "./Feed.css";
import addDocument from "../../backend/addDocument";
import getAllDocuments from "../../backend/getAllDocuments";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const collectionName = "posts";

  useEffect(() => {
    getAllDocuments(db, collectionName, setPosts, {
      name: "timestamp",
      value: "desc",
    });
  }, []);

  const sendPost = async e => {
    e.preventDefault();

    const post = {
      name: user.displayName ? user.displayName : "Anonymous",
      description:
        user.email == "obendesmond2@gmail.com"
          ? "OWNER OF APP: obendesmond2@gmail.com"
          : user?.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: serverTimestamp(),
    };
    // add post to posts document
    addDocument(db, collectionName, post);

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              type="text"
              placeholder="type a message"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* posts */}

      {posts &&
        posts.map(({ id, name, description, message, photoUrl }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
    </div>
  );
}

export default Feed;

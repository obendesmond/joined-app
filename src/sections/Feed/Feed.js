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

import { db } from "../../backend/firebase";
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
import { getData } from "../../backend/crud";

import "./Feed.css";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const q = query(collection(db, "posts"));
    const unsub = onSnapshot(q, querySnapshot => {
      const prePosts = [];
      querySnapshot.forEach(doc => {
        prePosts.push({ ...doc.data(), id: doc.id });
      });
      setPosts(prePosts);
    });

    return () => unsub();
  }, []);

  const sendPost = async e => {
    e.preventDefault();

    await addDoc(collection(db, "posts"), {
      name: "Desmond Oben",
      description: "This is a firebase test",
      message: input,
      photoUrl: "",
      timestamp: "23-342-22",
    });

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
      {posts.map(({ id, name, description, message, photoUrl }) => (
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

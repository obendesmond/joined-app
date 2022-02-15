import React, { useState, useEffect } from "react";

// mui icons
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

// components
import InputOption from "../../components/InputOption/InputOption";
import "./Feed.css";
import Post from "../../components/Posts/Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {}, [posts]);

  const sendPost = e => {
    e.preventDefault();
    alert("workss...");
    setPosts([
      ...posts,
      {
        name: "Desmond Oben",
        description: "This is a test",
        message: "wow it worked",
      },
    ]);

    console.log(posts);
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="type a message" />
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
      {posts.map(post => {
        <Post
          name={post.name}
          description={post.description}
          message={post.message}
        />;
      })}
      <Post
        name="Desmond Oben"
        description="This is a test"
        message="Wow this worked"
      />
    </div>
  );
}

export default Feed;

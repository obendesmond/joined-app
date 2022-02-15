import React from "react";
import "./App.css";

// sections
import Feed from "./sections/Feed/Feed";
import Header from "./sections/Header/Header";
import Sidebar from "./sections/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      {/* app header */}
      <Header />

      {/* app body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* app widget */}
      </div>
    </div>
  );
}

export default App;

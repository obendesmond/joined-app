import React from "react";
import "./App.css";
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
        {/* app feed */}
        {/* app widget */}
      </div>
    </div>
  );
}

export default App;

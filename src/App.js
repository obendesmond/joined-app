import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import { getAuth, onAuthStateChanged } from "./backend/firebase";

// sections
import Feed from "./sections/Feed/Feed";
import Header from "./sections/Header/Header";
import Login from "./sections/Login/Login";
import Sidebar from "./sections/Sidebar/Sidebar";
import Widgets from "./sections/Widgets/Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      } else {
        // logout
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {/* app header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        // app__body
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* replace this with app widget */}
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;

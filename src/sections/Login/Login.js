import React, { useState } from "react";
import "./Login.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "../../backend/firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = e => {
    e.preventDefault();
    if (checkEmailAndPasswordField()) {
      //   alert("login on now...");
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
          dispatch(
            login({
              email: userCredentials.user.email,
              uid: userCredentials.user.uid,
              displayName: userCredentials.user.displayName,
              photoURL: userCredentials.user.photoURL,
            })
          );
        })
        .catch(err => alert(err.message));
    }
  };

  const register = () => {
    if (checkEmailAndPasswordField()) {
      if (!name) return alert("Please enter a full name");
      else {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            updateProfile(user, {
              displayName: name,
              photoURL: profilePic,
            })
              .then(() => {
                dispatch(
                  login({
                    email: userCredentials.user.email,
                    uid: userCredentials.user.uid,
                    displayName: name,
                    photoURL: profilePic,
                  })
                );
              })
              .catch(err => alert(err.message));
          })
          .catch(err => alert(err.message));
      }
    }
  };

  const checkEmailAndPasswordField = () => {
    if (!email || !password) {
      alert("email or password field shouldn't be empty");
      return false;
    } else return true;
  };

  return (
    <div className="login">
      <img
        src="https://logos-marques.com/wp-content/uploads/2021/03/Linkedin-logo.png"
        alt="Noimage"
      />

      <form>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          className="nameInput"
          type="text"
          placeholder="full name (required if registering)"
        />
        <input
          value={profilePic}
          onChange={e => setProfilePic(e.target.value)}
          type="text"
          placeholder="profile pic url (optional)"
        />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="enter email"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="enter password"
        />
        {/* <button className="login__registerBtn">
          Not a member? Register Now
        </button> */}
        <button type="submit" onClick={loginToApp}>
          Sign in
        </button>
        <p>
          Not a member?
          <span className="login__register" onClick={register}>
            {" "}
            Register Now
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;

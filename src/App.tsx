import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import NavBar from "./component/Navbar/NavBar";
import Profile from "./component/Profile/Profile";
import MyPosts from "./component/Profile/My posts/MyPosts";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;

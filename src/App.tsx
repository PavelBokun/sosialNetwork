import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import NavBar from "./component/Navbar/NavBar";
import Dialogs from "./component/Dialogs/Dialogs";
import Profile from "./component/Profile/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      {/* <Profile /> */}
      <div className="app-wrapper-content">
      {/* <Dialogs /> */}
      <Profile />
      </div>
      
    </div>
  );
}

export default App;

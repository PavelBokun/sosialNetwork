import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import NavBar from "./component/Navbar/NavBar";
import Profile from "./component/Profile/Profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dialogs from "./component/Dialogs/Dialogs";
import News from "./component/News/News";
import Music from "./component/Music/Music";
import Seting from "./component/Seting/Seting";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <NavBar />
          <div className="app-wrapper-content">
            <Switch>
              <Route path="/dialogs" component={Dialogs} />
              <Route path="/profile" component={Profile} />
              <Route path="/news" component={News} />
              <Route path="/music" component={Music} />
              <Route path="/seting" component={Seting} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

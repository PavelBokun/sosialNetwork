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
import { AppProps} from ".";

export  type AppPropsTYPE=AppProps
function App(props:AppPropsTYPE) {
  return (
    <>
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <NavBar />
          <div className="app-wrapper-content">
            <Switch>
              <Route path="/dialogs" render={()=><Dialogs dialogsData={props.dialogsData} messageData={props.messagesData}    />} />
              <Route path="/profile" render={()=><Profile postsData={props.postsData}   />} />
              <Route path="/news" render={()=><News />} />
              <Route path="/music" render={()=><Music />} />
              <Route path="/seting" render={()=><Seting />} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

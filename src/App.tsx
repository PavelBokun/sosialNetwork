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
// import {  StateType} from "./redux/state";
import {RootStateType} from './redux/state'
import { Frends } from "./component/Frends/Frends";
// export  type AppPropsTYPE=StateType
function App(props:{state:RootStateType}) {
  return (
    <>
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <NavBar />
          <div className="app-wrapper-content">
            <Switch>
              <Route path="/dialogs" render={()=><Dialogs dialogsData={props.state.dialogsPage.dialogsData} messagesData={props.state.dialogsPage.messagesData}    />} />
              <Route path="/profile" render={()=><Profile postsData={props.state.profilePage.postsData} frendsData={props.state.frendsData}   />} />
              <Route path="/news" render={()=><News />} />
              <Route path="/music" render={()=><Music />} />
              <Route path="/seting" render={()=><Seting />} />
              <Route path="/frends" render={()=><Frends frends={props.state.frendsData.frends} />} />
              
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

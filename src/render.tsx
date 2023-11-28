import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType, addPost} from './redux/state'
import { BrowserRouter } from 'react-router-dom';

// export type MessagesType = {
//   message: string;
//   id: number;
// };

// export type DialogsItemsType = {
//   name: string;
//   id: number;
//   faise:string
// };

// export type PostDataType={
//   id:number;
//   message:string;
//   like:string;
// }
// export type AppProps={
//   postsData:PostDataType[]
//   dialogsData:DialogsItemsType[]
//   messagesData:MessagesType[]
// }

// let postsData:PostDataType[]= [
//   { id: 1, message: "How are you", like: "2" },
//   { id: 2, message: "It is my first post", like: "7" },
//   { id: 3, message: "Sveta Hi", like: "2" },
//   { id: 4, message: "Victor big man", like: "2" },
//   { id: 4, message: "Victor big man", like: "2" },

// ];
// let dialogsData:DialogsItemsType[] = [
//   { id: 1, name: "Dimych", faise: " 🧑" },
//   { id: 2, name: "Ahdrey", faise: " 🧒" },
//   { id: 3, name: "Sveta", faise: " 👩‍🦰" },
//   { id: 4, name: "Victor", faise: " 👨‍🦱" },
// ];
// let messagesData:MessagesType[] = [
//   { id: 1, message: "Hi" },
//   { id: 2, message: "Hi boy" },
//   { id: 3, message: "Sveta Hi" },
//   { id: 4, message: "Victor big man" },
// ];

 export let rerender=(state:RootStateType)=>{
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} />
      </BrowserRouter> ,document.getElementById('root'));
  
}

// addPost={addPost}

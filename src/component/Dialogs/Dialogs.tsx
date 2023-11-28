import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import { DialogsItems } from "./DialogItems/DialogItems";
import { Message } from "./Message/Message";
import {
  DialogsItemsType,
  DialogsPageType,
  MessagesType,
  RootStateType,
} from "../../redux/state";
import React, { useRef } from "react";
// import { DialogsItemsType, MessagesType } from "../..";
// import { DialogsItemsType, MessagesType } from "../../App";

export type DialogsMessageProps = {
  dialogsData: DialogsItemsType[];
  messagesData: MessagesType[];
  addMessage: (addNewMessage: string) => void
};

const Dialogs = (props: DialogsMessageProps) => {
  // let dialogsElement=props.dialogsData.map((el)=>{
  //   <DialogsItems name={el.name} id={el.id} faise={el.faise} />
  //   })
  //   let messageElement=props.messagesData.map((el)=>{<Message message={el.message} id={el.id} />})
  const newMessageElement = useRef<HTMLTextAreaElement>(null);

  let addMessage=()=>{
if (newMessageElement.current && newMessageElement.current.value) {
  let text: string = newMessageElement.current.value;
  props.addMessage(text);
  newMessageElement.current.value= "";
}

  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.dialogsData.map((el) => (
          <DialogsItems name={el.name} id={el.id} faise={el.faise} />
        ))}
        {/* {dialogsElement} */}
      </div>
      <div className={s.messages}>
        {props.messagesData.map((el) => (
          <Message message={el.message} id={el.id} />
        ))}
        {/* {messageElement} */}
      </div>
      <div>
        <textarea ref={newMessageElement}></textarea>
        <div>
          <button onClick={addMessage}>Add Message</button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Dialogs;

import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import { DialogsItems } from "./DialogItems/DialogItems";
import { Message } from "./Message/Message";
import { DialogsItemsType, MessagesType } from "../..";
// import { DialogsItemsType, MessagesType } from "../../App";

 export type DialogsMessageProps={
    dialogsData:DialogsItemsType[];
    messageData:MessagesType[]
}

const Dialogs = (props:DialogsMessageProps) => {
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.dialogsData.map((el) => (
          <DialogsItems name={el.name} id={el.id} faise={el.faise} />
        ))}
        {/* <DialogsItems name={dialogsData[0].name} id={dialogsData[0].name} faise={dialogsData[0].faise} />
        <DialogsItems name={dialogsData[1].name} id={dialogsData[1].name} faise={dialogsData[1].faise} />
        <DialogsItems name={dialogsData[2].name} id={dialogsData[2].name} faise={dialogsData[2].faise}/>
        <DialogsItems name={dialogsData[3].name} id={dialogsData[3].name} faise={dialogsData[3].faise} /> */}
      </div>
      <div className={s.messages}>
        {props.messageData.map((el) => (
          <Message message={el.message} id={el.id} />
        ))}
        {/* <Message message= {messagesData[0].message}/>
        <Message message= {messagesData[1].message} />
        <Message message= {messagesData[2].message} />
        <Message message= {messagesData[3].message} /> */}

        {/* <div className={s.message}>Hi</div>
        <div className={s.message}> Yo Yo Yo</div>
        <div className={s.message}>Hellow</div> */}
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Dialogs;

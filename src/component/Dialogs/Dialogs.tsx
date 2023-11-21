import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import { DialogsItems } from "./DialogItems/DialogItems";
import { Message } from "./Message/Message";
import { DialogsItemsType, DialogsPageType, MessagesType } from "../../redux/state";
// import { DialogsItemsType, MessagesType } from "../..";
// import { DialogsItemsType, MessagesType } from "../../App";

//  export type DialogsMessageProps={
//     dialogsData:DialogsItemsType[];
//     messageData:MessagesType[]
// }

const Dialogs = (props:DialogsPageType) => {
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.dialogsData.map((el) => (
          <DialogsItems name={el.name} id={el.id} faise={el.faise} />
        ))}
       
      </div>
      <div className={s.messages}>
        {props.messagesData.map((el) => (
          <Message message={el.message} id={el.id} />
        ))}
       
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Dialogs;

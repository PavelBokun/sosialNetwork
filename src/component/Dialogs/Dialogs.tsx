import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

export type DialogsItemsType = {
  name: string;
  id: string;
  faise:string
};
export type MessagesType = {
    message: string
    
  };

const DialogsItems = (props: DialogsItemsType) => {
  let pash = "/dilogs/" + props.id;

  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={pash}>{props.name + props.faise}</NavLink>
    </div>
  );
};
const Message = (props: MessagesType) => {
    // let pash = "/dilogs/" + props.id;
//   const messageUser=['Hi','Yo Yo Yo','Hellow']
    return (
        <div className={s.message}>{props.message}</div>
    );
  };

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogsItems name="Dimych" id="1" faise=" 🧑" />
        <DialogsItems name="Ahdrey" id="2"faise=" 🧒" />
        <DialogsItems name="Sveta" id="3" faise=" 👩‍🦰"/>
        <DialogsItems name="Victor" id="4"faise=" 👨‍🦱" />
      </div>
      <div className={s.messages}>
        <Message message= 'Hi' />
        <Message message= 'Yo Yo Yo' />
        <Message message= 'Hellow' />

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

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
    
    let dialogsData=[
        {id:1,name:"Dimych",faise:" 🧑"},
        {id:2,name:"Ahdrey",faise:" 🧒"},
        {id:3,name:"Sveta",faise:" 👩‍🦰"},
        {id:4,name:"Victor",faise:" 👨‍🦱"}

    ]
    let messagesData=[
        {id:1,message:"Hi"},
        {id:2,message:"Hi boy"},
        {id:3,message:"Sveta Hi"},
        {id:4,message:"Victor big man"}
    ]
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogsItems name={dialogsData[0].name} id={dialogsData[0].name} faise={dialogsData[0].faise} />
        <DialogsItems name={dialogsData[1].name} id={dialogsData[1].name} faise={dialogsData[1].faise} />
        <DialogsItems name={dialogsData[2].name} id={dialogsData[2].name} faise={dialogsData[2].faise}/>
        <DialogsItems name={dialogsData[3].name} id={dialogsData[3].name} faise={dialogsData[3].faise} />
      </div>
      <div className={s.messages}>
        <Message message= {messagesData[0].message}/>
        <Message message= {messagesData[1].message} />
        <Message message= {messagesData[2].message} />
        <Message message= {messagesData[3].message} />

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

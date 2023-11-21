import { NavLink } from "react-router-dom";
import s from './Dialog.module.css'
import { DialogsItemsType } from "../../../redux/state";
// import { DialogsItemsType } from "../../..";
// import { DialogsItemsType } from "../../../App";


 export const DialogsItems = (props: DialogsItemsType) => {
    let pash = "/dilogs/" + props.id;
  
    return (
      <div className={`${s.dialog} ${s.active}`}>
        <NavLink to={pash}>{props.name + props.faise}</NavLink>
        
      </div>
    );
  };

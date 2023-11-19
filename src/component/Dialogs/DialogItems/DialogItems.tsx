import { NavLink } from "react-router-dom";
import s from './Dialog.module.css'

export type DialogsItemsType = {
    name: string;
    id: number;
    faise:string
  };
 export const DialogsItems = (props: DialogsItemsType) => {
    let pash = "/dilogs/" + props.id;
  
    return (
      <div className={`${s.dialog} ${s.active}`}>
        <NavLink to={pash}>{props.name + props.faise}</NavLink>
      </div>
    );
  };

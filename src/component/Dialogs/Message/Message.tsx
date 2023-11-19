
// import { MessagesType } from '../../../App';
import { MessagesType } from '../../..';
import s from './Message.module.css'

  
   export const Message = (props: MessagesType) => {
    return <div className={s.message}>{props.message}</div>;
  };


// import { MessagesType } from '../../../App';
// import { MessagesType } from '../../..';
import { MessagesType } from '../../../redux/state';
import s from './Message.module.css'

  
   export const Message = (props: MessagesType) => {
    return <div className={s.message}>{props.message}</div>;
  };

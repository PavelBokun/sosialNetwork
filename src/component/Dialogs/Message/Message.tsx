
import s from './Message.module.css'
export type MessagesType = {
    message: string;
    id: number;
  };
  
   export const Message = (props: MessagesType) => {
    return <div className={s.message}>{props.message}</div>;
  };

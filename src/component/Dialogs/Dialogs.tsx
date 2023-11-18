import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={`${s.dialog} ${s.active}`}>Dimych</div>
        <div className={s.dialog}>Ahdrey</div>
        <div className={s.dialog}>Sveta</div>
        <div className={s.dialog}>Victor</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}> Yo Yo Yo</div>
        <div className={s.message}>Hellow</div>
      </div>
      <div></div>
      <div></div>

    </div>
  );
};

export default Dialogs;

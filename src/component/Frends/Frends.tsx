import { FrendsDataType, RootStateType } from "../../redux/state";
import s from './Frends.module.css'

export const Frends = (props: FrendsDataType) => {
  return (
    <div>
      <p>My Frends</p>
      {props.frends.map((friend) => (
        <div className={s.frends}>
          <div key={friend.id} className={s.frends}>
            <div>{friend.name}</div>
            <div className={s.faise}>{friend.faise}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

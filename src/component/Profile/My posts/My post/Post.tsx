import s from "./Mypost.module.css";

export const Post = (props: { message: string; like: string }) => {
  return (
    <>
      <div className={s.item}>
        <img
          src="https://pixelbox.ru/wp-content/uploads/2021/04/cats-ava-steam-5.jpg"
          alt="avatar"
        />
        <div>
          {props.message}
          <div>
            <span>{props.like+`👍`}</span>
          </div>
        </div>
      </div>
    </>
  );
};

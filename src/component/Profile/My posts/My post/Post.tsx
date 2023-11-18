import s from "./Mypost.module.css";
type postsDataType = {
  id: number;
  message: string;
  like: string;
};

export const Post = (props: postsDataType) => {
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

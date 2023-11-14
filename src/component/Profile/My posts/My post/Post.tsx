import s from "./Mypost.module.css";

export const Post = () => {
  return (
    <>
      <div className={s.item}>
        <img
          src="https://pixelbox.ru/wp-content/uploads/2021/04/cats-ava-steam-5.jpg"
          alt="avatar"
        />
        <div>
          <div>
            <span>like</span>
          </div>

          <p>Post</p>
        </div>
      </div>
    </>
  );
};

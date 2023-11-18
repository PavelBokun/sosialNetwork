// type MypostsType={
//     cols:string;
//     rows:string
// }

import { Post } from "./My post/Post";
import s from "./Myposts.module.css";
const MyPosts = () => {
  return (
    <div className={s.postBlock}>
      <div>
        <div>
          <textarea className={s.textarea}></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      My posts
      <div>New post</div>
      <div className={s.posts}>
        <Post message="How are you" like="2" />
        <Post message="It is my first post" like="5" />
      </div>
    </div>
  );
};
export default MyPosts;

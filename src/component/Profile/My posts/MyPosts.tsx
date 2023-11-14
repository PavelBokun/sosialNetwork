// type MypostsType={
//     cols:string;
//     rows:string
// }

import { Post } from "./My post/Post";
import s from "./Myposts.module.css";
const MyPosts = () => {
  return (
    <div>
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      My posts
      <div>New post</div>
      <div className={s.posts}>
      <Post />
      <Post />
      <Post />
        <Post />
      </div>
    </div>
  );
};
export default MyPosts;

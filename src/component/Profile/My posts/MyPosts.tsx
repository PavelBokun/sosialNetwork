// type MypostsType={
//     cols:string;
//     rows:string
// }

import { Post } from "./My post/Post";
import s from "./Myposts.module.css";
const MyPosts = () => {
  let postsData=[
    {id:1,message:"How are you",like:"2" },
    {id:2,message:"It is my first post",like:"7"},
    {id:3,message:"Sveta Hi",like:"2"},
    {id:4,message:"Victor big man",like:"2"}
]
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
        <Post message={postsData[0].message} like= {postsData[0].like} />
        <Post message={postsData[1].message} like= {postsData[1].like}/>
      </div>
    </div>
  );
};
export default MyPosts;

 


// import { PostDataType } from "../../../App";
import { PostDataType } from "../../..";
import { Post } from "./My post/Post";
import s from "./Myposts.module.css";

 export type PropsMyPost={
  postsData:PostDataType[]
}

const MyPosts = (props:PropsMyPost) => {
  debugger
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
        {props.postsData.map((post) => (
          <Post message={post.message} like={post.like} id={post.id}/>
        ))}
        {/* <Post message={postsData[0].message} like= {postsData[0].like} />
        <Post message={postsData[1].message} like= {postsData[1].like}/> */}
      </div>
    </div>
  );
};
export default MyPosts;

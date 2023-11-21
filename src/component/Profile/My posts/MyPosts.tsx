 


// import { PostDataType } from "../../../App";
// import { PostDataType } from "../../..";
import { PostDataType } from "../../../redux/state";
import { Post } from "./My post/Post";
import s from "./Myposts.module.css";

 export type PropsMyPost={
  postsData:PostDataType[]
}

const MyPosts = (props:PropsMyPost) => {
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
        
      </div>
    </div>
  );
};
export default MyPosts;

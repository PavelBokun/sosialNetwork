 


// import { PostDataType } from "../../../App";
// import { PostDataType } from "../../..";
import React from "react";
import { PostDataType } from "../../../redux/state";
import { Post } from "./My post/Post";
import s from "./Myposts.module.css";

 export type PropsMyPost={
  postsData:PostDataType[]
}

const MyPosts = (props:PropsMyPost) => {
 let newPostElement=React.createRef<HTMLTextAreaElement>()
  let addPost=()=>{
    let text=newPostElement.current?.value
    alert(text)
  }
  return (
    <div className={s.postBlock}>
      <div>
        <div>
          <textarea className={s.textarea}  ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
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

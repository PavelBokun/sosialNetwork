 


// import { PostDataType } from "../../../App";
// import { PostDataType } from "../../..";
import React, { useRef } from "react";
import { PostDataType } from "../../../redux/state";
import { Post } from "./My post/Post";
import s from "./Myposts.module.css";
import { text } from "stream/consumers";

 export type PropsMyPost={
  postsData:PostDataType[]
  addPost: (postText: string) => void 
}

const MyPosts = (props:PropsMyPost) => {
 let newPostElement=useRef<HTMLTextAreaElement>(null)
  // 
  let addPost = () => {
        if (newPostElement.current && newPostElement.current.value) {
      let text: string = newPostElement.current.value;
      props.addPost(text);
      newPostElement.current.value= "";
    }
  };
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

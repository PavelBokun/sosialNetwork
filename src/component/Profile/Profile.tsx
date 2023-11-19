// import { PostDataType } from "../../App";
import { PostDataType } from "../..";
import MyPosts from "./My posts/MyPosts";
// import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

 export type ProfileType={
  postsData:PostDataType[]
 }

const Profile = (props:ProfileType) => {

  
  return (
    <>
      <div>
        <ProfileInfo />
        <MyPosts postsData={props.postsData}    />
      </div>
    </>
  );
};

export default Profile;

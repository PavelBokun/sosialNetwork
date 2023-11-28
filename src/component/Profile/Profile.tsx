// import { PostDataType } from "../../App";
// import { PostDataType } from "../..";
import { FrendsDataType, PostDataType, RootStateType, addPost } from "../../redux/state";
import { Frends } from "../Frends/Frends";
import MyPosts from "./My posts/MyPosts";
// import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

  type ProfileType={
  postsData:PostDataType[]
  frendsData:FrendsDataType
  addPost: (postText: string) => void
 }
  // type ProfileType={
  //   postsData: RootStateType
  // }
const Profile = (props:ProfileType) => {

  
  return (
    <>
      <div>
        <ProfileInfo />
        <MyPosts postsData={props.postsData} addPost={addPost}   />
        <Frends frends={props.frendsData.frends} />
        
      </div>
    </>
  );
};

export default Profile;

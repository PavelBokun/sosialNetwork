// import { PostDataType } from "../../App";
// import { PostDataType } from "../..";
import { FrendsDataType, PostDataType } from "../../redux/state";
import { Frends } from "../Frends/Frends";
import MyPosts from "./My posts/MyPosts";
// import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

 export type ProfileType={
  postsData:PostDataType[]
  frendsData:FrendsDataType
 }

const Profile = (props:ProfileType) => {

  
  return (
    <>
      <div>
        <ProfileInfo />
        <MyPosts postsData={props.postsData}    />
        <Frends frends={props.frendsData.frends} />
        
      </div>
    </>
  );
};

export default Profile;

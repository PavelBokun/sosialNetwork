import { FrendsDataType, NewPostTextType, PostDataType,  addPost, updateNewPostText } from "../../redux/state";
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

  type ProfilePropsType={
  postsData:PostDataType[]
  frendsData:FrendsDataType
 newpost:NewPostTextType
  addPost: (postText: string) => void
  updateNewPostText:(NewText: string)=>void
 }
 
const Profile = (props:ProfilePropsType) => {

  
  return (
    <>
      <div>
        <ProfileInfo />
        <MyPosts postsData={props.postsData} addPost={addPost} newpost={props.newpost}  updateNewPostText={updateNewPostText}      />
        {/* <Frends frends={props.frendsData.frends} /> */}

        
      </div>
    </>
  );
};

export default Profile;

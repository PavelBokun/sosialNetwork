
import MyPosts from './My posts/MyPosts';
import s from'./Profile.module.css'

const Profile = () => {
  return (
    <>
            <div className={s.content}>
        Main content
        <div>
          <img
            src="https://i.pinimg.com/originals/b7/8b/80/b78b8002f46d41644079811854dfbf25.jpg"
            width="800px"
            alt=""
          />
          <div> ava+descr</div>
          <p></p>
          <p></p>
          <div>
          <MyPosts />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

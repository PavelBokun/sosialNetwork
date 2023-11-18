
import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
  return (
    <>
      <div>
        ProfileInfo 
        <div >
          <img
            src="https://i.pinimg.com/originals/b7/8b/80/b78b8002f46d41644079811854dfbf25.jpg"
            width="800px"
            alt=""
          />
           <div className={s.profileInfo}> ava+descr</div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo

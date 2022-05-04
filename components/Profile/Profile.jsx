import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
const Profile = () => {
  return (
    <div>
      <div>
        <img
          className={s.lotr}
          src="https://i.playground.ru/p/GGibPMVqi-QZ51oaxwhrmQ.jpeg"
        />
      </div>
      <div className={s.item}>ava + description</div>
      <MyPosts />
    </div>
  );
};
export default Profile;

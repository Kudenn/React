
import s from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={s.lotr}
          src="https://i.playground.ru/p/GGibPMVqi-QZ51oaxwhrmQ.jpeg"
        />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};
export default ProfileInfo;

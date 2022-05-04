import s from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg"></img>
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};
export default Post;

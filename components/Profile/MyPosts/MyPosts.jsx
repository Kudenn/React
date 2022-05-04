import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>App post</button>
        <button>Remove</button>
      </div>
      <div className={s.item}>
        <Post message="Hi, how are you?" likesCount="3" />
        <Post message="It`s my first post" likesCount="23" />
      </div>
    </div>
  );
};
export default MyPosts;

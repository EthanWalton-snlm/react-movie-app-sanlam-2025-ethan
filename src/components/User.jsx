import "../styles.css";
import { LikeButtons } from "../DislikeButton";

function User({ name, imageLink }) {
  return (
    <div className="userBox">
      <img src={imageLink} className="profileImage" />
      <p className="nameHeading">
        Hello, <span>{name}🎉🎉</span>
      </p>
      <LikeButtons />
    </div>
  );
}

export { User };

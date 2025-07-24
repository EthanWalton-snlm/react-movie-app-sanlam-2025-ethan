import "./styles.css";
import { useState } from "react";

function LikeButtons() {
  return (
    <div class="buttons">
      <Button dislike={false} />
      <Button />
    </div>
  );
}

function Button({ dislike = true }) {
  const [likes, setLikes] = useState(0);

  return (
    <button
      aria-label={`${dislike ? "dislike" : "like"} button`}
      onClick={() => setLikes(likes + 1)}
    >
      {dislike ? "👎" : "👍"}
      {likes}
    </button>
  );
}

export { LikeButtons };

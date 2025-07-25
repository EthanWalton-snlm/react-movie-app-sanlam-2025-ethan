import { useState } from "react";

export function Movie({ title, rating, summary, poster, trailer }) {
  const [toggleSummary, setToggleSummary] = useState(false);
  const ratingStyle = (rating) =>
    rating < 8.5 ? { color: "red" } : { color: "green" };
  const summaryToggle = (toggleSummary) =>
    toggleSummary ? { display: "inline" } : { display: "none" };
  return (
    <div class="movie-container">
      <img src={poster} alt={title} class="movie-poster" />
      <div className="movie-content-container">
        <div class="movie-specs">
          <h2 class="movie-name">
            <a href={trailer}>{title}</a>
          </h2>
          <p class="movie-rating" style={ratingStyle(rating)}>
            ⭐ {rating}
          </p>
        </div>
        <div className="toggle-summary">
          <button onClick={() => setToggleSummary(!toggleSummary)}>
            Toggle Summary
          </button>
          <p class="movie-summary" style={summaryToggle(toggleSummary)}>
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
}

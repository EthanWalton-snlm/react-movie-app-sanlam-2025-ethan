import "../styles.css";
import { useState } from "react";
import { MovieList } from "../components/MovieList";
import { movies as DEFAULT_MOVIES } from "../constants";

function Movies() {
  const [movies, setMovies] = useState([...DEFAULT_MOVIES]);
  const movie = { name: "", rating: 0, summary: "", poster: "", trailer: "" };
  const handleSubmit = (event) => {
    event.preventDefault();
    setMovies([...movies, movie]);
  };

  return (
    <div className="add-movie">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => (movie.name = event.target.value)}
        />
        <input
          type="text"
          placeholder="Poster"
          onChange={(event) => (movie.poster = event.target.value)}
        />
        <input
          type="text"
          placeholder="Rating"
          onChange={(event) => (movie.rating = event.target.value)}
        />
        <input
          type="text"
          placeholder="Summary"
          onChange={(event) => (movie.summary = event.target.value)}
        />
        <input
          type="text"
          placeholder="Trailer"
          onChange={(event) => (movie.trailer = event.target.value)}
        />
        <button type="submit">➕ Add</button>
      </form>

      <MovieList movies={movies} />
    </div>
  );
}

export { Movies };

import { Movie } from "./Movie";

export function MovieList({ movies }) {
  const mapMovies = (movie) => (
    <Movie
      key={movie.id}
      title={movie.name}
      rating={movie.rating}
      summary={movie.summary}
      poster={movie.poster}
      trailer={movie.trailer}
    />
  );

  return <div className="movie-list-container ">{movies.map(mapMovies)}</div>;
}

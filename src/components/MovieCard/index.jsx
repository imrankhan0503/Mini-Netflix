import { Link } from "react-router-dom"
import styles from "./movie-card.module.css"

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className={styles.card}>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/300x450"
        }
        alt={movie.title}
      />

      <div className={styles.overlay}>
        <p>{movie.title}</p>
        <span>⭐ {movie.vote_average}</span>
      </div>
    </Link>
  )
}

export default MovieCard
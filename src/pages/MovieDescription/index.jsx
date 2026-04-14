import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchMovieDetails } from "../../api/movies"
import styles from "./movie-description.module.css"

const MovieDescription = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetchMovieDetails(id).then(data => setMovie(data))
  }, [id])

  if (!movie) return <p>Loading...</p>

  return (
    <div className={styles.fullPage}>

      <button onClick={() => navigate(-1)} className={styles.back}>
        ← Back
      </button>

      <button onClick={() => navigate(-1)} className={styles.close}>
        ✕
      </button>

      <div className={styles.content}>

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />

        <div>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>⭐ {movie.vote_average}</p>
        </div>

      </div>
    </div>
  )
}

export default MovieDescription
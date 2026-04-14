import { useEffect, useState } from "react"
import { fetchByGenre } from "../../api/movies"
import MovieCard from "../../components/MovieCard"
import styles from "./action.module.css"

const Action = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchByGenre(28).then(data => setMovies(data.results))
  }, [])

  return (
    <div className={styles.container}>
      <h2>Action Movies</h2>

      <div className={styles.grid}>
        {movies.map(m => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>

    </div>
  )
}

export default Action
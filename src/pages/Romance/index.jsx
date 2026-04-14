import { useEffect, useState } from "react"
import { fetchByGenre } from "../../api/movies"
import MovieCard from "../../components/MovieCard"
import styles from "./romance.module.css"

const Romance = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchByGenre(10749).then(data => setMovies(data.results))
  }, [])

  return (
    <div className={styles.container}>
      <h2>Romance Movies</h2>

      <div className={styles.grid}>
        {movies.map(m => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>

    </div>
  )
}

export default Romance
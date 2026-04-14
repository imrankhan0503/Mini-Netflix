import { useEffect, useState } from "react"
import {
  fetchPopular,
  fetchTopRated,
  fetchUpcoming
} from "../../api/movies"
import MovieCard from "../../components/MovieCard"
import styles from "./home.module.css"

const Home = () => {
  const [popular, setPopular] = useState([])
  const [topRated, setTopRated] = useState([])
  const [upcoming, setUpcoming] = useState([])

  useEffect(() => {
    fetchPopular().then(data => setPopular(data.results || []))
    fetchTopRated().then(data => setTopRated(data.results || []))
    fetchUpcoming().then(data => setUpcoming(data.results || []))
  }, [])

  const renderSection = (title, data) => (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.grid}>
        {data.slice(0, 10).map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )

  return (
    <div className={styles.container}>
      
      <div className={styles.hero}>
        <h1>Unlimited Movies</h1>
        <p>Watch anywhere. Cancel anytime.</p>
      </div>

      {renderSection("Popular Movies", popular)}
      {renderSection("Top Rated", topRated)}
      {renderSection("Upcoming", upcoming)}

    </div>
  )
}

export default Home
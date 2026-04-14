import { useEffect, useState } from "react"
import { fetchPopular } from "../../api/movies"
import {
  Outlet,
  NavLink,
  useLocation,
  useOutletContext
} from "react-router-dom"

import MovieCard from "../../components/MovieCard"
import styles from "./movies.module.css"

const Movies = () => {
  const [movies, setMovies] = useState([])

  const location = useLocation()
  const { menuOpen } = useOutletContext()

  const isMainPage = location.pathname === "/movies"

  useEffect(() => {
    fetchPopular().then(data => setMovies(data.results))
  }, [])

  return (
    <div className={styles.container}>

      <h1>Movies</h1>

      {/* SUB NAV */}
      {!menuOpen && (
        <div className={styles.subNav}>

          <NavLink to="action"
            className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Action
          </NavLink>

          <NavLink to="romance"
            className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
            Romance
          </NavLink>

        </div>
      )}

      {/*  ONLY MAIN PAGE */}
      {isMainPage && (
        <div className={styles.grid}>
          {movies.slice(0, 12).map(m => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      )}

      {/* SUB ROUTES */}
      <Outlet />

    </div>
  )
}

export default Movies
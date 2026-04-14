import { NavLink } from "react-router-dom"
import styles from "./navigation.module.css"

const Navigation = ({ menuOpen, setMenuOpen }) => {

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={styles.nav}>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={`${styles.links} ${menuOpen ? styles.show : ""}`}>

        <NavLink to="/" onClick={closeMenu}
          className={({isActive}) => isActive ? styles.active : ""}>
          Home
        </NavLink>

        <NavLink to="/movies" onClick={closeMenu}
          className={({isActive}) => isActive ? styles.active : ""}>
          Movies
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}
          className={({isActive}) => isActive ? styles.active : ""}>
          About
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}
          className={({isActive}) => isActive ? styles.active : ""}>
          Contact
        </NavLink>

      </div>

    </nav>
  )
}

export default Navigation


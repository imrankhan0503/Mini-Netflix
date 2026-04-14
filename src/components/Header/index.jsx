import styles from "./header.module.css"
import Navigation from "../Navigation"
import LoginButton from "../LoginButton"
import { Link } from "react-router-dom"


const Header = ({menuOpen, setMenuOpen}) =>  {
  return (
    <header className={styles.header}>
       <Link to="/" className={styles.logo}>Netflix</Link>
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <LoginButton />
    </header>
  )
}

export default Header
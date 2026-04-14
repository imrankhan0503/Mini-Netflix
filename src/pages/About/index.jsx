import styles from "./about.module.css"

const About = () => {
  return (
    <div className={styles.container}>
      <h1>About This Project</h1>

      <p>
        This is a Netflix-style React application built using API data.
      </p>

      <p>
        It includes routing, dynamic pages, and responsive design.
      </p>

      <p>
        The goal was to create a modern UI with reusable components.
      </p>
    </div>
  )
}

export default About
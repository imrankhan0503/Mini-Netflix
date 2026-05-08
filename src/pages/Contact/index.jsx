import styles from "./contact.module.css"

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Form submitted successfully!")
  }

  return (
    <div className={styles.container}>

      <h1>Contact Us</h1>

      <p className={styles.description}>
        If you have any questions about this project, feel free to contact us.
      </p>

      <form className={styles.form}>

        <input
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          required
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          required
        ></textarea>

        <button onClick={handleSubmit}>
         Send Message
        </button>

      </form>

    </div>
  )
}

export default Contact
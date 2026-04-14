import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="layout">

      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="content">
        <Outlet context={{ menuOpen }} />
      </main>

      <Footer />

    </div>
  )
}

export default Layout
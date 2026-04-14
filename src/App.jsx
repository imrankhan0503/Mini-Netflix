import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Action from "./pages/Action"
import Romance from "./pages/Romance"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Layout from "./pages/Layout"
import MovieDescription from "./pages/MovieDescription"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />

        {/* SUB ROUTES */}
        <Route path="/movies" element={<Movies />}>
          <Route path="action" element={<Action />} />
          <Route path="romance" element={<Romance />} />
        </Route>

        {/* SEPARATE PAGE */}
        <Route path="/movie/:id" element={<MovieDescription />} />

        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App








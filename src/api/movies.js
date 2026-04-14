const API_KEY = "2c077dc9d414c49fb4dafdfb8ac28b19"
const BASE = "https://api.themoviedb.org/3"

// helper
const fetchData = async (url) => {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error("API request failed")
  }

  return res.json()
}

export const fetchPopular = async () => {
  return fetchData(`${BASE}/movie/popular?api_key=${API_KEY}`)
}

export const fetchTopRated = async () => {
  return fetchData(`${BASE}/movie/top_rated?api_key=${API_KEY}`)
}

export const fetchUpcoming = async () => {
  return fetchData(`${BASE}/movie/upcoming?api_key=${API_KEY}`)
}

export const fetchMovieDetails = async (id) => {
  return fetchData(`${BASE}/movie/${id}?api_key=${API_KEY}`)
}

// GENRE
export const fetchByGenre = async (genreId) => {
  return fetchData(
    `${BASE}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
  )
}
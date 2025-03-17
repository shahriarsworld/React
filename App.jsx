import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const movieNum = 1;

  return (
    <>
    {movieNum === 1 ? (
    <MovieCard movie={{title: "Avengers", release_date:"2025"}}/>) : 
    (
    <MovieCard movie={{title: "Solo Leveling", release_date:"2026"}}/>)
    }
    </>
  )
}
export default App

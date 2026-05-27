import MovieCard from "../Components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]); // ✅ state for movies
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(true);

  // ✅ load movies when page opens
  useEffect(() => {
    const loadPopularMovies=async ()=>{
      try{
        const popularMovies=await getPopularMovies()
        setMovies(popularMovies)
      }catch(err){
        console.log(err);
        setError("Failed");
      }
      finally{
        setLoading(false);
      }
    }
    loadPopularMovies()
  }, []);

  // ✅ search handler
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery) return;

    const data = await searchMovies(searchQuery);
    setMovies(data);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies...."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="search-button">Search</button>
      </form>
      {error && <div className="error-message">{error}</div>}
      
      {loading ? <div className="loading">Loading..</div>: <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>}

      
    </div>
  );
}

export default Home;
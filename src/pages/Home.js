import { useState, useEffect } from 'react';
import { fetchMoviesTrend } from '../components/apiMovies';
import { MovieItem } from 'components/movieItem/MovieItem';
const Home = () => {
  const [tranding, setTranding] = useState([]);
  useEffect(() => {
    // запит
    fetchMoviesTrend()
      .then(movies => {
        setTranding(movies.data.results);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      Trending today
      <ul>
        <MovieItem tranding={tranding} />
      </ul>
    </div>
  );
};

export default Home;

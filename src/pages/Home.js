import { useState, useEffect } from 'react';
import { fetchMoviesTrend } from '../components/apiMovies';
import { MovieItem } from 'components/movieItem/MovieItem';
import { ConteinerDetails } from '../components/MovieDetails/MovieDetails.styled';

const Home = () => {
  const [tranding, setTranding] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    // запит
    fetchMoviesTrend()
      .then(movies => {
        setTranding(movies.data.results);
      })
      .catch(error => {
        console.log(error.message);        
      });
    return () => controller.abort();
  }, []);

  return (
    <ConteinerDetails>
      <h2>Trending today</h2>
      <ul>
        <MovieItem tranding={tranding} />
      </ul>
    </ConteinerDetails>
  );
};

export default Home;

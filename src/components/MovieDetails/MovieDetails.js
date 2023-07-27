import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetal } from '../apiMovies';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w400';
const MovieDetails = () => {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();
  const { title, poster_path, release_date, vote_average, overview, genres } = film ?? {};

  useEffect(() => {
    // запит
    fetchMovieDetal(movieId)
      .then(detals => {
        setFilm(detals.data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [movieId]);

  console.log(film);
  return (
  <>
    {film &&(<div>
      <div>
        <img src={`${IMAGE_URL}/${poster_path}`} alt={`${title}`} />
      </div>
      <div>
        <h2>
            {title} ({release_date})
        </h2>
        <p>User score: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(({ name }) => name).join(', ')}</p>
      </div>

        <p>Additional information</p>
        <ul>
          <li>
            <Link to={'cast'}>
              Cast
            </Link>            
          </li>

          {/* <li>
            <Link to={'reviews'}>
              Reviews
            </Link>            
          </li> */}
        </ul>
        <Outlet/>
      </div>
      )}
  </>
  );
};

export default MovieDetails;

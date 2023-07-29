import { useState, useEffect, useRef } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { fetchMovieDetal } from '../apiMovies';
import { Suspense } from 'react';
import {
  SectionMovie,
  Conteiner,
  ConteinerDetails, AddInform, Button
} from './MovieDetails.styled';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w400';

const MovieDetails = () => {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();
  const { title, poster_path, release_date, vote_average, overview, genres } =
    film ?? {};
  const location = useLocation();
  const navigate = useNavigate();
  const backLocation = useRef(location.state?.from ?? '/');

  const goBack = () => {
    navigate(backLocation.current);
  };

  useEffect(() => {
    const controller = new AbortController();
    // запит
    fetchMovieDetal(movieId)
      .then(detals => {
        setFilm(detals.data);
      })
      .catch(error => {
        console.log(error.message);
      });
    return () => controller.abort();
  }, [movieId]);

  return (
    <>
      <Button type="button" onClick={goBack}>
        Go back
      </Button>
      {film && (
        <div>
          <div>
            <SectionMovie>
              <Conteiner>
                {poster_path ? (
                  <img src={`${IMAGE_URL}/${poster_path}`} alt={`${title}`} />
                ) : (
                  <p>not found poster</p>
                )}
                <ConteinerDetails>
                  <h2>
                    {title} ({release_date})
                  </h2>
                  <p>User score: {vote_average}</p>
                  <h3>Overview</h3>
                  <p>{overview}</p>
                  <h3>Genres</h3>
                  <p>{genres.map(({ name }) => name).join(', ')}</p>
                </ConteinerDetails>
              </Conteiner>
            </SectionMovie>
            <SectionMovie>
              <h2>Additional information</h2>
              <ul>
                <AddInform>
                  <Link to={'cast'}>Cast</Link>
                </AddInform>

                <AddInform>
                  <Link to={'reviews'}>Reviews</Link>
                </AddInform>
              </ul>
            </SectionMovie>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetails;

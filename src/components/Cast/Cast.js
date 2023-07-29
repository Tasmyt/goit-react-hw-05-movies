import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCast } from '../apiMovies';
import  {SectionMovie}  from '../MovieDetails/MovieDetails.styled';
import { CastStyles, CastItem, NoPhoto } from '../Cast.styled';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';
const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  
  useEffect(() => {
    const controller = new AbortController();
    // запит
    fetchCast(movieId)
      .then(cast => {
        setCast(cast.data.cast);
      })
      .catch(error => {
        console.log(error.message);
      });
    return () => controller.abort();
  }, [movieId]);

  console.log(cast);

  return (
    <>
      <SectionMovie>
      <h2>Cast</h2>
      {cast.length ? (
        <CastStyles>
          {cast.map(({ id, name, character, profile_path }) => {
            return (
              <CastItem key={id}>
                {profile_path ? (
                  <img src={`${IMAGE_URL}/${profile_path}`} alt={name} />
                ) : (
                  <NoPhoto
                    src={`https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png`}
                      alt={name}                      
                  />
                )}
                <h3>{name}</h3>
                <p>{character}</p>
              </CastItem>
            );
          })}
        </CastStyles>
      ) : (
        <p>We did not find information about the cast</p>
      )}
</SectionMovie>
    </>
  );
};

export default Cast;

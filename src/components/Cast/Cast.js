import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCast } from '../apiMovies';

 const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  
  useEffect(() => {
    // запит
    fetchCast(movieId)
      .then(cast => {
        setCast(cast);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [movieId]);

  console.log(cast);
  return (
    <ul>
          <li>
              fgfgfgh
      </li>
      
    </ul>
  );
};

export default Cast;
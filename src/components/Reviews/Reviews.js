import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from '../apiMovies';
import { SectionMovie } from '../MovieDetails/MovieDetails.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    // запит
    fetchReviews(movieId)
      .then(reviews => {
        setReviews(reviews.data.results);
      })
      .catch(error => {
        console.log(error.message);
      });
    return () => controller.abort();
  }, [movieId]);
  console.log(reviews);

  return (
    <>
      <SectionMovie>
        <h2>Reviews</h2>
        {reviews.length ? (
          <ul>
            {reviews.map(({ id, author, content }) => {
              return (
                <li key={id}>
                  <h3>{author}</h3>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>there are no reviews</p>
        )}
      </SectionMovie>
    </>
  );
};
export default Reviews;

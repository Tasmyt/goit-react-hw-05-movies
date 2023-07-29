import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { fetchMovies } from '../components/apiMovies';
import { Form, Input, Search } from './Movies.styled';
import { List } from 'components/movieItem/MovieItem.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const location = useLocation();

  const handleChange = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    // запит
    const controller = new AbortController();
    query &&
      fetchMovies(query)
        .then(movies => {
          setMovies(movies.data.results);
        })
        .catch(error => {
          console.log(error.message);
        });
    return () => controller.abort();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    console.log(search);
    console.log(query);

    // if (movies.length === 0 ) {
    //    alert('No movies found');
    // }

    setSearchParams({ query: search });
    setSearch('');
    setMovies([]);
    if (search === '') {
      return setSearchParams({});
    }
  };
  console.log(query);
  console.log(movies);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" value={search} onChange={handleChange} />
        <Search type="submit">Search</Search>
      </Form>
      
      <ul>
        
        {movies.map(({ id, title }) => (
            
          <List key={id}>
            <Link to={`/movies/${id}`} state={{from: location}}>{title}</Link>;
          </List>
        ))}
      </ul>
    </>
  );
};

export default Movies;

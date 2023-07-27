import { NavLink, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Movies from "pages/Movies";
import Cast from "./Cast/Cast";
import MovieDetails from './MovieDetails/MovieDetails';
export const App = () => {
  return (
    <div >
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to ='/movies'>Movies</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/movies/:movieId' element={<MovieDetails />} />
          <Route path="cast" element={<Cast />} />
          {/* <Route path="reviews" element={<Reviews />} /> */}
      </Routes>
    </div>
  );
};

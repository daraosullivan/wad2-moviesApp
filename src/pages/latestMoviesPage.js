import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'


const LatestMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => {  // New
    return !("favorite" in m);
  });
  return (
    <PageTemplate
      title="No. Movies"
      movies={movies}  /* Changed */
     
    />
  );
  };
export default LatestMoviesPage;
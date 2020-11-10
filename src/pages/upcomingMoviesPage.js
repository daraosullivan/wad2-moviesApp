import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext'

const UpcomingMoviesPage = props => {
  const context = useContext(MoviesContext);
  const upcoming = context.movies.filter( m => m.upcoming )
  return (
    <MovieListPageTemplate
      movies={upcoming}
      title={"Upcoming Movies"}
    />
  );
};

export default UpcomingMoviesPage;
import React, {useContext} from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import WatchListButton from '../components/buttons/addToWatchList'

const PopularMoviesPage = () => {
  const context = useContext(MoviesContext);
  console.log("Context"+ context.movies.toString())
  const popularMovies = context.popular
    return (
      <PageTemplate
        title="No. Movies"
        movies={popularMovies} 
        action={(popular) => {
          return <WatchListButton movie={popular} />;
        }}
      />
    );
  };
  
  export default PopularMoviesPage;
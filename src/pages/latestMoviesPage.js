import React, {useContext} from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import WatchListButton from '../components/buttons/addToWatchList'

const LatestMoviesPage = () => {
  const context = useContext(MoviesContext);
  console.log("Context"+ context.movies.toString())
  const latestMovies = context.latest 
    return (
      <PageTemplate
        title="No. Movies"
        movies={latestMovies} 
        action={(latest) => {
          return <WatchListButton movie={latest} />;
        }}
      />
    );
  };
  
  export default LatestMoviesPage;
import React, {useContext} from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import WatchListButton from '../components/buttons/addToWatchList'

const PopularMoviesPage = () => {
    const context = useContext(MoviesContext);
    const popularMovies = context.popular  
    return (
      <PageTemplate
        title="No. Movies"
        movies={popularMovies}  /* Changed */
        action={(popular) => {
          return <WatchListButton movie={popular} />;
        }}
      />
    );
  };

export default PopularMoviesPage;
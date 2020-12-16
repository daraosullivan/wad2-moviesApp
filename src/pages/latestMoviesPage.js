import React, {useContext} from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import WatchListButton from '../components/buttons/addToWatchList'

const LatestMoviesPage = () => {
    const context = useContext(MoviesContext);
    const latestMovies = context.latest  
    return (
      <PageTemplate
        title="No. Movies"
        movies={latestMovies}  /* Changed */
        action={(latest) => {
          return <WatchListButton movie={latest} />;
        }}
      />
    );
  };

export default LatestMoviesPage;
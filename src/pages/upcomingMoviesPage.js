import React, {useContext} from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import WatchListButton from '../components/buttons/addToWatchList'

const UpcomingMoviesPage = () => {
    const context = useContext(MoviesContext);
    const upcomingMovies = context.upcoming  
    return (
      <PageTemplate
        title="No. Movies"
        movies={upcomingMovies}  /* Changed */
        action={(upcoming) => {
          return <WatchListButton movie={upcoming} />;
        }}
      />
    );
  };

export default UpcomingMoviesPage;
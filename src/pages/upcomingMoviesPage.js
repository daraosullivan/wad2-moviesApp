import React, {useContext} from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import WatchListButton from '../components/buttons/addToWatchList'

const UpcomingMoviesPage = () => {
  const context = useContext(MoviesContext);
  console.log("Context"+ context.movies.toString())
 // const upcomingMovies = context.filter((m) => {  // New
//    return !("watchList" in m);
  const upcomingMovies = context.upcoming  //SR that may have been movies before
  
    return (
      <PageTemplate
        title="No. Movies"
        movies={upcomingMovies} 
        action={(upcoming) => {
          return <WatchListButton movie={upcoming} />;
        }}
      />
    );
  };
  
  export default UpcomingMoviesPage;
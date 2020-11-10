import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import WatchListButton from '../components/buttons/addToWatchList'

const UpcomingMoviesPage = () => {
    const context = useContext(MoviesContext);
    const upcomingMovies = context.movies.filter((m) => {  // New
      return !("favorite" in m);
    });
  
    return (
      <PageTemplate
        title="No. Movies"
        movies={upcomingMovies}  /* Changed */
        action={(movie) => {
          return <WatchListButton movie={movie} />;
        }}
      />
    );
  };
  
  export default UpcomingMoviesPage;
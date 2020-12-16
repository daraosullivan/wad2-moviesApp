import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getLatestMovies, getPopularMovies} from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
      };
    case "load":
      return { movies: action.payload.movies };
    case "add-review":
      // Completed in next section
      break;
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
     // Completed in next section
  };
  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    getLatestMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    getPopularMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        popular: state.popular,
        latest: state.latest,
        favorites: state.favorites,
        addToFavorites: addToFavorites,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
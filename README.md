# Assignment 1 - ReactJS app.

Name: Dara O'Sullivan

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Feature 1 - An upcoming movies page to display upcoming movies. Has errors is not finding the movies
 + Feature 2 - An latest movies page to display latest movies. Has errors is not finding the movies
 + Feature 3 = An popular movies page to display popular movies. Has errors is not finding the movies

## Setup requirements (If required).

None

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&page=1 - popular movies
+ https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=release_date.desc&page=1 - latest movies 
+ https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=release_date.desc&page=1 - upcoming movies

## App Design.

### Component catalogue (If required).

None

### UI Design.

None

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ /movies/latest (public) - latest movies 
+ /movies/upcoming (public) - upcoming movies
+ /movies/popular (public) - popular movies

### Data hyperlinking.

None

## Independent learning (If relevant).


---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png

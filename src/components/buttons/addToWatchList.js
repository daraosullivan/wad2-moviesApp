import React from "react";
import { Link } from "react-router-dom";

const WatchListButton = ({ movie }) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/reviews/form`,
        state: {
          movie: movie
        }
      }}
    >
      Add to Watch List 
    </Link>
  );
};

export default WatchListButton;
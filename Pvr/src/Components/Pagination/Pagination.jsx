import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import MovieCard from "../../Components/MovieCard/MovieCard";

const ResultsPagination = ({
  submittedQuery,
  moviesList,
  setMoviesList,
  itemsPerPage = 4,
}) => {
  const [page, setPage] = useState(1);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleMovies = moviesList.slice(startIndex, endIndex);

  return (
    <>
      <MovieCard movies={visibleMovies} />
      {moviesList.length > 0 && (
        <Pagination
          count={Math.ceil(moviesList.length / itemsPerPage)}
          page={page}
          onChange={handleChangePage}
          size="large"
        />
      )}
    </>
  );
};

export default ResultsPagination;
import { useState } from "react";

const useManagePagination = () => {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  return {
    page,
    setPage,
    nextPage,
    previousPage,
  };
};

export default useManagePagination;

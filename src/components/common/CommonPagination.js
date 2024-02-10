import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import ReactPaginate from "react-paginate";

const CommonPagination = ({ totalDataCount, setPage, page }) => {
  const { colorMode } = useColorMode();
  const count = totalDataCount || 1;
  return (
    <>
      <ReactPaginate
        previousLabel={<ArrowBackIcon />}
        nextLabel={<ArrowForwardIcon />}
        pageCount={count || 1}
        containerClassName="pagination-flex"
        forcePage={page ? page - 1 : 1}
        onPageChange={(selected) => {
          setPage(selected.selected + 1);
        }}
        activeClassName={colorMode === "light" ? "active" : "dark-mode"}
      />
    </>
  );
};

export default CommonPagination;

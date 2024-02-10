import { useEffect, useState } from "react";
import { Grid, GridItem, Box, Flex } from "@chakra-ui/react";
import { api } from "../api";
import { GET_ALL_QUOTES_API } from "../api/apiURL";
import { checkSuccessResponse } from "../utils/utils";
import useShowToast from "../hooks/useShowToast";
import Navbar from "../components/common/Navbar";
import CommonSpinner from "../components/common/CommonSpinner";
import CommonCard from "../components/common/CommonCard";
import CommonPagination from "../components/common/CommonPagination";
import useManagePagination from "../hooks/useManagePagination";

const Home = () => {
  const [quotes, setQuotes] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const showToast = useShowToast();
  const { page, setPage } = useManagePagination();

  const getQuotes = async () => {
    setIsLoading(true);
    const response = await api({
      endpoint: GET_ALL_QUOTES_API,
      params: {
        page: page,
      },
    });
    if (checkSuccessResponse(response)) {
      setQuotes(response?.data?.results);
      setTotalPages(response?.data?.totalPages);
    }
    setIsLoading(false);
  };

  const handleCopy = (index) => {
    setCopiedIndex(index);
    showToast({
      message: "Text copied to clipboard",
      duration: 2000,
    });
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  useEffect(() => {
    getQuotes();
    // eslint-disable-next-line
  }, [page]);

  return (
    <Box>
      <Navbar />
      {isLoading ? (
        <Flex justify={"center"} align={"center"} h={"calc(100vh - 200px)"}>
          <CommonSpinner />
        </Flex>
      ) : (
        <>
          <Grid
            templateColumns={{
              sm: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={12}
          >
            {quotes.map((quote, index) => {
              return (
                <GridItem
                  key={quote?._id}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  h={"100%"}
                >
                  <CommonCard
                    content={quote?.content}
                    author={quote?.author}
                    onCopy={() => handleCopy(index)}
                    isCopied={copiedIndex === index}
                  />
                </GridItem>
              );
            })}
          </Grid>
          <Box pt={10}>
            <CommonPagination
              totalDataCount={totalPages}
              setPage={setPage}
              page={page}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Home;

import { Box, Button, Flex, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import { api } from "../api";
import { GET_SINGLE_RANDOM_QUOTE } from "../api/apiURL";
import { checkSuccessResponse } from "../utils/utils";
import CommonCard from "../components/common/CommonCard";
import useShowToast from "../hooks/useShowToast";
import CommonSpinner from "../components/common/CommonSpinner";

const Random = () => {
  const [quote, setQuote] = useState({});
  const [isCopy, setIsCopy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const showToast = useShowToast();
  const { colorMode } = useColorMode();
  const getSignleQuote = async () => {
    setIsLoading(true);
    const response = await api({
      endpoint: GET_SINGLE_RANDOM_QUOTE,
    });
    if (checkSuccessResponse(response)) {
      setQuote(response?.data?.[0]);
    }
    setIsLoading(false);
  };

  const handleCopyText = () => {
    setIsCopy(true);
    showToast({
      message: "Text copied to clipboard",
      duration: 3000,
    });
    setTimeout(() => {
      setIsCopy(false);
    }, 3000);
  };

  useEffect(() => {
    getSignleQuote();
  }, []);

  return (
    <Box>
      <Navbar />
      {isLoading ? (
        <Flex justify={"center"} align={"center"} h={"calc(100vh - 200px)"}>
          <CommonSpinner />
        </Flex>
      ) : (
        <Flex
          justify={"center"}
          align={"center"}
          my={"auto"}
          direction={"column"}
          gap={5}
          height={"calc(100vh - 200px)"}
        >
          <Box w={"330px"}>
            <CommonCard
              author={quote?.author}
              content={quote?.content}
              onCopy={handleCopyText}
              isCopied={isCopy}
            />
          </Box>
          <Button
            bg={"transparent"}
            border={
              colorMode === "light"
                ? "0.1px solid rgba(0, 0, 0, 0.2)"
                : "0.1px solid rgba(255, 255, 255, 0.2)"
            }
            _hover={{ bg: "transparent" }}
            onClick={() => getSignleQuote()}
          >
            Generate New Quote
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default Random;

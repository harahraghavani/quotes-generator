import { CopyIcon } from "@chakra-ui/icons";
import { Card, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import copy from "copy-to-clipboard";
import React from "react";

const CommonCard = ({ content, author, onCopy, isCopied }) => {
  const { colorMode } = useColorMode();
  const handleCopyToClipboard = () => {
    const finalCopyText = `${content} by ${author}`;
    copy(finalCopyText);
    onCopy();
  };

  const boxShadowColor = colorMode === "light" ? "#6fcaff" : "#C4E0E5";

  return (
    <Card
      w={"100%"}
      h={"100%"}
      p={5}
      shadow={"md"}
      _hover={{
        shadow: "2xl",
        transition: "transform 0.5s ease",
        boxShadow: `4px 4px 10px 0px ${boxShadowColor}`,
      }}
      border={
        colorMode === "light"
          ? "0.1px solid rgba(0, 0, 0, 0.2)"
          : "0.1px solid rgba(255, 255, 255, 0.2)"
      }
    >
      <Flex h={"100%"} direction={"column"} gap={3} justify={"space-between"}>
        <Text fontSize="md">{content}</Text>
        <Flex justify={"space-between"} align={"center"}>
          <Heading size="xs" textTransform="uppercase">
            {author}
          </Heading>
          {isCopied ? (
            <Heading size="xs" textTransform="uppercase">
              Copied!
            </Heading>
          ) : (
            <CopyIcon cursor="pointer" onClick={handleCopyToClipboard} />
          )}
        </Flex>
      </Flex>
    </Card>
  );
};

export default CommonCard;

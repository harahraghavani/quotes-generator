import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, IconButton, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box pb={10}>
      <Flex justify={"space-between"} align={"center"} h={50}>
        <Link to={"/"}>
          <Heading
            bgGradient={
              colorMode === "light"
                ? "linear(to-l, #20A4F3, #182B3A)"
                : "linear(to-l, #4CA1AF, #C4E0E5)"
            }
            bgClip="text"
          >
            Quotes
          </Heading>
        </Link>
        <Flex align={"center"} gap={5}>
          <Link to="/quotes">All Quotes</Link>
          <IconButton
            aria-label="toggle color mode"
            variant="outline"
            isRound={true}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            border={
              colorMode === "light"
                ? "0.1px solid rgba(0, 0, 0, 0.5)"
                : "0.1px solid rgba(255, 255, 255, 0.5)"
            }
            _hover={{ bg: "transparent" }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;

// components/Navbar.js
import { Flex, Box, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="sticky"
      backdropFilter="blur(10px)"
      bgColor="rgba(0, 0, 0, 0.2)" // Adjust the alpha value for transparency
      color="white"
      p={4}
      alignItems="center"
    >
      <Box>
        <Heading size="md">ClimaGuard</Heading>
      </Box>
      <Box ml="auto">
        <Flex as="nav" align="center">
          <NextLink href="/" passHref>
            <Link
              px={4}
              py={2}
              transition="all 0.3s"
              _hover={{ textDecoration: "underline" }}
            >
              Home
            </Link>
          </NextLink>
          <NextLink href="/about" passHref>
            <Link
              px={4}
              py={2}
              transition="all 0.3s"
              _hover={{ textDecoration: "underline" }}
            >
              About
            </Link>
          </NextLink>
          <NextLink href="/contact" passHref>
            <Link
              px={4}
              py={2}
              transition="all 0.3s"
              _hover={{ textDecoration: "underline" }}
            >
              Contact
            </Link>
          </NextLink>
          <NextLink href="/contribute" passHref>
            <Link
              px={4}
              py={2}
              transition="all 0.3s"
              _hover={{ textDecoration: "underline" }}
            >
              Contribute
            </Link>
          </NextLink>
          {/* Add more links as needed */}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;

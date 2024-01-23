// components/HomeContent.js
import { Box, Heading, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useEffect, useState } from "react";

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
`;

const HomeContent = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headingParallaxDistance = -scrollY * 0.3; // Adjust the multiplier for the desired parallax effect
  const textParallaxDistance = -scrollY * 0.2; // Adjust the multiplier for the desired parallax effect

  return (
    <Box
      h="100vh"
      w="100%"
      position="relative"
      overflow="hidden"
      px={{ base: "4", md: "8", lg: "16" }}
    >
      <Box
        h="100%"
        w="100%"
        position="absolute"
        top="0"
        left="0"
        backgroundImage="url('https://images6.alphacoders.com/132/1325115.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          background: "rgba(0, 0, 0, 0.6)", // Adjust the alpha value for the darkness level
        }}
      >
        <Box
          h="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} // Increased font sizes
            color="white"
            fontFamily="Montserrat, sans-serif"
            style={{
              transform: `translateY(${headingParallaxDistance}px)`,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)", // Add text shadow
            }}
          >
            Explore the World of Climate Science
          </Heading>
          <Text
            mt={{ base: "4", md: "6", lg: "8" }}
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }} // Increased font sizes
            color="white"
            fontFamily="Montserrat, sans-serif"
            style={{
              transform: `translateY(${textParallaxDistance}px)`,
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)", // Add text shadow
            }}
          >
            Uncover innovative and sustainable solutions for a greener and
            healthier tomorrow.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeContent;

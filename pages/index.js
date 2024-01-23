// pages/index.js
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HomeContent from "../components/HomeContent";
import ClimateModelIntegration from "@/components/ClimateModelIntegration";

const theme = extendTheme(/* Add your custom theme here if needed */);

const Home = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <HomeContent />
      <ClimateModelIntegration />
    </ChakraProvider>
  );
};

export default Home;

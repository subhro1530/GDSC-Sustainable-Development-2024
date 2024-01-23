// components/ClimateModelIntegration.js
import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const ClimateModelIntegration = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [loading, setLoading] = useState(false);

  const query = async (data) => {
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/eci-io/climategpt-70b",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer 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",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error querying the model:", error);
      throw error;
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleModelIntegration = async () => {
    try {
      setLoading(true);

      const modelResponse = await query({ inputs: inputText });

      setOutputText(modelResponse.generated_text);
    } catch (error) {
      console.error("Error integrating the model:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box mt={8} mx="auto" maxW="container.xl">
      <Heading mb={4}>Climate Model Integration</Heading>
      <Text mb={4}>
        Enter a climate-related text, and the model will provide insights or
        suggestions based on the input.
      </Text>
      <FormControl mb={4}>
        <FormLabel>Input Text</FormLabel>
        <Input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter climate-related text..."
        />
      </FormControl>
      <Button
        colorScheme="teal"
        onClick={handleModelIntegration}
        isLoading={loading}
        loadingText="Processing..."
      >
        Get Model Output
      </Button>
      {outputText && (
        <Box mt={4}>
          <Text fontWeight="bold">Model Output:</Text>
          <Text>{outputText}</Text>
        </Box>
      )}
    </Box>
  );
};

export default ClimateModelIntegration;

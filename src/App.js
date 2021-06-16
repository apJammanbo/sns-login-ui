import { ChakraProvider, Button, VStack } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <VStack m={10}>
        <Button colorScheme="green" size="lg">
          Naver
        </Button>
        <Button colorScheme="yellow" size="lg">
          Kakao
        </Button>
        <Button colorScheme="facebook" size="lg">
          FaceBook
        </Button>
        <Button colorScheme="twitter" size="lg">
          Twitter
        </Button>
      </VStack>
    </ChakraProvider>
  );
}

export default App;

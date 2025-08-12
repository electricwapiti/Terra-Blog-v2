
import { Box, Container, Flex, Heading, Text, Button, Stack, Center } from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import { IoLogInOutline, IoAddCircleOutline } from "react-icons/io5";

function LandingPage() {
  return (
    <>
      {/* Replace these with your actual Header and Footer components */}
      <Header /> 

      <Container maxW="container.xl" bg="terra.secondary" py={8}>

        <Heading as="h1" textAlign="center" mb={2}>
          Terra
        </Heading>

        <Text fontSize="xl" textAlign="center" mb={8} color="terra.tertiary">
          A user-generated blog
        </Text>

        <Flex 
          direction={{ base: "column", md: "row" }} 
          justify="center" 
          textAlign="center" 
          gap={8}
        >
          {/* Left Column */}
          <Box flex="1" borderRight={{ md: "1px solid" }} borderColor="terra.tertiary" pr={{ md: 8 }}>
            <Heading as="h4" size="md" mb={4}>Read</Heading>
            <Center>
              <Button
                as="a"
                href="/blog"
                colorScheme="orange" // use your theme color or "terra" variant if defined
                leftIcon={<FaEye />}
                size="md"
              >
                View
              </Button>
            </Center>
          </Box>

          {/* Right Column */}
          <Box flex="1" pl={{ md: 8 }}>
            <Heading as="h4" size="md" mb={4}>Join and Post</Heading>

            <Flex justify="center" gap={4} mt={2} position="relative" height="40px">
              <Button
                as="a"
                href="/login"
                leftIcon={<IoLogInOutline />}
                colorScheme="orange"
                size="md"
                width="120px"
              >
                Login
              </Button>

              <Button
                as="a"
                href="/signup"
                leftIcon={<IoAddCircleOutline />}
                colorScheme="green"
                size="md"
                width="120px"
              >
                Sign up
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>

      <Footer />
    </>
  );
}
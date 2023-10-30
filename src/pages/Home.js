import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PiClock, PiFilmStrip, PiTicket, PiArrowRight } from "react-icons/pi";
import CardMovie from "../components/CardMovie";
import CardProps from "../components/CardProps";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const user = {
    name: "Sara",
    username: "Sara11",
    signUpDate: "30/10",
  };

  const handleInputSubmit = (event) => {
    event.preventDefault(); // To prevent the default behaviour of the web browser
    setTimeout(() => {
      navigate("/hooks");
      window.location.reload();
    }, 300);
  };

  return (
    <Box>
      {/* Navbar Section */}

      {/* Main Content Section */}
      <Box p={8}>
        <Flex
          bg={useColorModeValue("gray.50", "gray.800")}
          alignItems="center"
          justifyContent="center">
          <VStack spacing={8} textAlign="center">
            <Heading size="4xl">Welcome to Movie Booking App</Heading>
            <Text fontSize="xl" color="gray.500">
              Book your favorite movies now!
            </Text>
          </VStack>
        </Flex>

        <Flex
          w="full"
          bg={useColorModeValue("gray.50", "gray.800")}
          py={12}
          px={8}
          justifyContent="center">
          <SimpleGrid
            columns={{ base: 1, md: 1, lg: 3 }}
            spacing={8}
            maxW="6xl"
            mx="auto">
            {/* Your CardMovie component */}
            <CardMovie />
            <CardMovie />
          </SimpleGrid>
        </Flex>

        <Flex
          w="full"
          bg={useColorModeValue("gray.50", "gray.800")}
          py={12}
          px={8}
          justifyContent="center">
          {/* Your CardProps component */}
          <CardProps user={user} />
        </Flex>

        <Button
          rightIcon={<PiArrowRight />}
          colorScheme="teal"
          variant="solid"
          onClick={handleInputSubmit}>
          View Hooks Example
        </Button>
      </Box>

      {/* Footer Section */}
    </Box>
  );
}

export default Home;

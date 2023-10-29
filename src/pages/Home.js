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

function Home() {
  return (
    <Box>
      <Flex
        bg={useColorModeValue("gray.50", "gray.800")}
        p={8}
        w="full"
        alignItems="center"
        justifyContent="center">
        <VStack spacing={8} textAlign="center">
          <Heading size="4xl">Welcome to Movie Booking App</Heading>
          <Text fontSize="xl" color="gray.500">
            Book your favourite movies now!
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
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={8}
          maxW="6xl"
          mx="auto">
          <CardMovie />
        </SimpleGrid>
      </Flex>
    </Box>
  );
}

export default Home;

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
import CardUseState from "../components/CardUseState";
import CardUseEffect from "../components/CarduseEffect";

function Hooks() {
  return (
    <Box>
      <Flex
        bg={useColorModeValue("gray.50", "gray.800")}
        p={8}
        w="full"
        alignItems="center"
        justifyContent="center">
        <VStack spacing={8} textAlign="center">
          <Heading size="4xl">Welcome to Hooks Example Page</Heading>
        </VStack>
      </Flex>
      <Flex
        w="full"
        bg={useColorModeValue("gray.50", "gray.800")}
        py={12}
        px={8}
        justifyContent="center"
        flexDirection="column">
        <Text fontSize="xl" color="gray.500">
          This is a state hook Example
        </Text>
        <CardUseState />
      </Flex>

      <Flex
        w="full"
        bg={useColorModeValue("gray.50", "gray.800")}
        py={12}
        px={8}
        justifyContent="center"
        flexDirection="column">
        <Text fontSize="xl" color="gray.500">
          This is a use Effect Example
        </Text>
        <CardUseEffect />
      </Flex>
    </Box>
  );
}

export default Hooks;

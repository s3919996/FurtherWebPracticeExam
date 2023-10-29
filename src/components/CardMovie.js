import React from "react";
import {
  Box,
  Text,
  Image,
  AspectRatio,
  Tag,
  TagLabel,
  TagLeftIcon,
  Button,
} from "@chakra-ui/react";
import { PiStarFill, PiArrowRight } from "react-icons/pi";

function CardMovie() {
  return (
    <Box p="0" maxW="240px" borderRadius="lg" textAlign="left">
      <Box position="relative"></Box>
      <Text fontSize="xl" fontWeight="bold" mt="4">
        Movie Title
      </Text>
    </Box>
  );
}

export default CardMovie;

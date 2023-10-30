import React from "react";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";

function CardProps(props) {
  const user = props.user;

  return (
    <Box p="0" maxW="240px" borderRadius="lg" textAlign="left">
      <Text> Hello, {user.name}</Text>
      <Text> Username: {user.username}</Text>
      <Text> Sign up date: {user.signUpDate}</Text>
    </Box>
  );
}

export default CardProps;

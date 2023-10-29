import { Box, ChakraProvider, VStack, theme } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box minH="100vh" align="center" position="relative">
          <VStack spacing={8} width="100vw" pt="24" pb={8}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </VStack>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;

import { Box, Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

function CardUseState() {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <Box>
      <Text>Count: {count}</Text>
      <Button onClick={increment}>Increment</Button>
    </Box>
  );
}

export default CardUseState;

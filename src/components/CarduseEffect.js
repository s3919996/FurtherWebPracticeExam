import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

function CardUseEffect() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  // First useEffect to update count
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Second useEffect to fetch data from an API
  useEffect(() => {
    // You can replace this with the actual API URL
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Filter data based on userId (e.g., userId 1)
  const filteredData = data.filter((post) => post.id === 1);

  return (
    <Box>
      <Text>Elapsed Time: {count} seconds</Text>
      {filteredData.map((post) => (
        <Box key={post.id}>
          <Text>Title: {post.title}</Text>
          <Text>Body: {post.body}</Text>
        </Box>
      ))}
    </Box>
  );
}

export default CardUseEffect;

import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';

const GithubBox = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      position="relative"
      backgroundColor="white"
      color="black"
      height="500px"
      borderTop="1px"
      borderColor="gray.300"
    >
      <Box height="400px" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Text fontSize="4xl" mb={12}>
          Days I Code
        </Text>
        <GitHubCalendar
          username="Chinmay2660"
          blockSize={20}
          blockMargin={5}
          fontSize={16}
          hideColorLegend
        />
      </Box>
    </Box>
  );
};

export default GithubBox;

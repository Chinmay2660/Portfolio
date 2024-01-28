import React from 'react';
import { Box, Text, useBreakpointValue } from '@chakra-ui/react';

const Projects = () => {
  const height = useBreakpointValue({ base: "60vh", md: "30vh", lg: "30vh", xl: "70vh" });

  return (
    <Box
      id="projects"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      position="relative"
      backgroundColor="#6e07f3"
      color="#ffffff"
      height={height}
    >
      <Box
        width="820px"
        height="180px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        marginBottom="50px"
        marginTop="50px">
        <Text
          fontSize="3xl"
          fontWeight="bold"
          padding="2"
          position="relative"
          zIndex="1">
          My Projects
        </Text>
        <Text
          fontSize="xl"
          padding="2"
          position="relative"
          zIndex="1">
          I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to try designing and building my own.
        </Text>
      </Box>
    </Box>
  );
};

export default Projects;

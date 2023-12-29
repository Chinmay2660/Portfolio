import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Box
      display="flex"
      textAlign="center"
      position="relative"
      backgroundColor="#6e07f3" 
      color="#ffffff"
      height="612px"
    >
      <Text
        fontSize="xl"
        padding="2"
        position="relative"
        zIndex="1"
      >
        Hi, I’m Matt. Nice to meet you. Since beginning my journey as a
        freelance designer over 11 years ago, I've done remote work for
        agencies, consulted for startups, and collaborated with talented people
        to create digital products for both business and consumer use. I'm
        quietly confident, naturally curious, and perpetually working on
        improving my chops one design problem at a time.
      </Text>
    </Box>
  );
};

export default About;

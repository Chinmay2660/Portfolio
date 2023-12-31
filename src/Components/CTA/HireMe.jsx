import React from 'react';
import { Box, Text, Button, Flex } from '@chakra-ui/react';

const HireMe = () => {
  return (
    <Flex
      id="hireMe"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        zIndex={1}
        width="1000px"
        background="#141c3a"
        borderRadius="10px"
        p={20}
        boxShadow="md"
        display="flex"
        flexDirection="row"
        alignItems="center"
        height="50%"
        marginTop="-110px"
        marginBottom="-110px"
        color="white"
      >
        <Text fontSize="xl" fontWeight="bold" marginRight={4} >
          Hiring Me?
        </Text>
        <Text flex="1" textAlign="center" marginRight={4}>
          Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
        </Text>
        <Button
          colorScheme="teal"
          onClick={() => window.location.href = 'mailto:bhoirchinmay2014@gmail.com'}
        >
          Contact Me
        </Button>
      </Box>
    </Flex>
  );
};

export default HireMe;

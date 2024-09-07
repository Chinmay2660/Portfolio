import React from 'react';
import { Box, Text, Button, Flex } from '@chakra-ui/react';

const HireMe = () => {
  return (
    <Flex
      // id="hireMe"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        zIndex={1}
        width="80%"
        background="#141c3a"
        borderRadius="15px"
        p={{ base: "30px 40px", md: "30px 50px", lg: "40px 60px" }}
        boxShadow="md"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "center" }}
        height="50%"
        marginTop={{ base: "-10px", md: "-110px" }}
        marginBottom={{ base: "-130px", md: "-110px" }}
        color="white"
      >
        <Text fontSize={{ base: "xl", md: "xl", lg: "2xl" }} fontWeight="bold" marginRight={{ base: 0, md: 5, lg: 6 }} marginBottom={{ base: 4, md: 0 }} >
          Hiring Me?
        </Text>
        <Text flex="1" textAlign={{ base: "center", md: "center" }} marginRight={{ base: 0, md: 5, lg: 6 }} marginBottom={{ base: 4, md: 0 }}>
          Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
        </Text>
        <Button
          size="lg"
          paddingX="5"
          paddingY="3"
          variant="ghost"
          borderColor="#5be9b9"
          borderWidth="2px"
          borderRadius="20px"
          bg='#141c3a'
          color="white"
          onClick={() => window.open('https://mail.google.com/', '_blank')}
          _hover={{
            bg: "#5be9b9",
            color: "#141c3a",
          }}
          marginTop={{ base: 4, md: 0 }}
        >
          Contact Me
        </Button>
      </Box>
    </Flex>
  );
};

export default HireMe;

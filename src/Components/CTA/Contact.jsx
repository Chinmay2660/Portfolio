import React from 'react';
import { Box, Text, Button, Flex } from '@chakra-ui/react';

const Contact = () => {
    return (
        <Flex
            id="contact"
            direction="column"
            align="center"
            justify="center"
            textAlign="center"
            position="relative"
            backgroundColor="transparent"
            color="black"
            height="612px"
            borderBottom="1px"
            borderColor="gray.300"
        >
            <Box width="820px" marginTop="200px">
                <Text fontSize="3xl" fontWeight="bold" padding="2" zIndex="1">
                    Interested in collaborating with me?
                </Text>
                <Text fontSize="xl" padding="2" zIndex="1">
                    I’m always open to discussing product design work or partnership opportunities.
                </Text>
            </Box>
            <Button colorScheme="teal" mt="4" marginTop="50px">
                Start a conversation
            </Button>
        </Flex>
    );
};

export default Contact;

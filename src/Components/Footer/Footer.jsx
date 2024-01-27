import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            position="relative"
            backgroundColor="#6e07f3"
            color="#ffffff"
            height="612px"
        >
            <Box width="820px" height="500px" display="flex" flexDirection="column" justifyContent="center" marginTop="100px">
                <Text fontSize="3xl" paddingY="2" lineHeight="1.2" >
                    Living, learning, & leveling up <br /> one day at a time.
                </Text>
                <Text fontSize="xl" paddingY="2" marginTop="250px">
                    Created by Chinmay @ 2023
                </Text>
            </Box>
        </Box>
    )
}

export default Footer
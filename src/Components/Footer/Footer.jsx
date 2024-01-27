import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiGeeksforgeeks, SiHackerrank, SiLeetcode } from "react-icons/si";

const iconStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '1rem',
    backgroundColor: '#6e07f3',
    border: '2px solid white',
    color: 'white',
    fontSize: '24px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    textDecoration: 'none',
    ":hover": {
        backgroundColor: 'white', 
        color: '#6e07f3', 
    }
}

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
            height={{ base: 'auto', md: '612px' }} 
            padding={{ base: '-60px', md: '0' }}
        >
            <Box width="820px" height="500px" display="flex" flexDirection="column" justifyContent="center" marginTop={{ base: '2.5rem', md: '1.5rem' }} marginBottom={{base: '0', md: '0', lg: '0', xl: '0'}}>
            <Text fontSize={{ base: '2xl', md: '3xl' }} paddingY="2" lineHeight="1.2" >
                    Living, learning, & leveling up <br /> one day at a time.
                </Text>
                <Box fontSize="xl" paddingY="2" marginTop="50px" display="flex" justifyContent="center">
                    <a href="https://www.linkedin.com/in/chinmay2660/" target="_blank" rel="noopener noreferrer" style={iconStyle}><FaLinkedin /></a>
                    <a href="https://github.com/Chinmay2660" target="_blank" rel="noopener noreferrer" style={iconStyle}><FaGithub /></a>
                    <a href="mailto:bhoirchinmay2014@gmail.com" style={iconStyle}><FaEnvelope /></a>
                    <a href="https://leetcode.com/Chinmay2660/" target="_blank" rel="noopener noreferrer" style={iconStyle}><SiLeetcode /></a>
                    <a href="https://auth.geeksforgeeks.org/user/chinmay2660" target="_blank" rel="noopener noreferrer" style={iconStyle}><SiGeeksforgeeks /></a>
                    <a href="https://www.hackerrank.com/profile/Chinmay2660" target="_blank" rel="noopener noreferrer" style={iconStyle}><SiHackerrank /></a>
                </Box>
                <Text fontSize={{ base: '2xl', md: '3xl' }} paddingY="2" marginTop="1rem">
                    Created by Chinmay @ 2023
                </Text>
            </Box>
        </Box>
    )
}

export default Footer;

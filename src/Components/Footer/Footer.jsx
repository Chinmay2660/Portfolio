import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaInstagramSquare } from 'react-icons/fa';
import { SiGeeksforgeeks, SiHackerrank, SiLeetcode } from "react-icons/si";

const iconData = [
    { link: "https://www.linkedin.com/in/chinmay2660/", icon: FaLinkedin },
    { link: "https://twitter.com/ChinmayBhoir14", icon: FaTwitter },
    { link: "https://www.instagram.com/chinmay__bhoir/", icon: FaInstagramSquare },
    { link: "https://github.com/Chinmay2660", icon: FaGithub },
    { link: "mailto:bhoirchinmay2014@gmail.com", icon: FaEnvelope },
    // { link: "https://leetcode.com/Chinmay2660/", icon: SiLeetcode },
    // { link: "https://auth.geeksforgeeks.org/user/chinmay2660", icon: SiGeeksforgeeks },
    // { link: "https://www.hackerrank.com/profile/Chinmay2660", icon: SiHackerrank }
];

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
            minHeight={{ base: 'auto', md: '612px' }}
            padding={{ base: '2rem', md: '0' }}
        >
            <Box width="100%" maxWidth="820px" padding="0 1rem">
                <Text fontSize={{ base: '2xl', md: '3xl' }} paddingY="2" lineHeight="1.2" >
                    Living, learning, & leveling up <br /> one day at a time.
                </Text>
                <Box fontSize="xl" paddingY="2" marginTop="50px" display="flex" justifyContent="center" flexWrap="wrap">
                    {iconData.map((item, index) => (
                        <Button
                            as="a"
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            width="50px"
                            height="50px"
                            borderRadius="50%"
                            marginRight="1rem"
                            marginBottom="1rem"
                            backgroundColor="#6e07f3"
                            border="2px solid white"
                            color="white"
                            fontSize="24px"
                            padding='0'
                            transition="background-color 0.3s ease, color 0.3s ease"
                            textDecoration="none"
                            _hover={{
                                backgroundColor: 'white',
                                color: '#6e07f3',
                            }}
                        >
                            <item.icon />
                        </Button>
                    ))}
                </Box>
                <Text fontSize="xl" paddingY="2" marginTop="1rem">
                    Created by Chinmay @ 2023
                </Text>
            </Box>
        </Box>
    )
}

export default Footer;

import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import ResumePDF from '../../Assets/Resume_Chinmay_Bhoir.pdf';

const About = () => {
    const handleDownloadResume = () => {
        window.open(ResumePDF, '_blank');
    };

    return (
        <Box
            id="about"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            backgroundColor="#6e07f3"
            color="#ffffff"
            height={{ base: '90vh', md: '90vh', lg: '90vh', xl: '100vh' }}
            padding={{ base: '1rem 1rem 2rem', md: '2rem 2rem 2rem', lg: '3rem 3rem 3rem', xl: '5rem' }}
        >
            <Box
                width="100%"
                maxW="820px"
                paddingBottom={{ base: '3rem', md: '4rem', lg: '5rem' }}
            >
                <Text
                    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                    fontWeight="bold"
                    padding="2"
                >
                    Hi, I’m Chinmay Bhoir.
                </Text>
                <Text
                    fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                    padding="2"
                >
                    Currently working as Software Development Engineer (SDE - 1) at Jio Platforms Limited with a strong passion for innovation and problem-solving. My journey has been a diverse one, beginning with my involvement in user acceptance testing — a role that allowed me to understand the balance between user expectations and technical execution. This experience now guides my path as a Software Development Engineer, where I'm committed to crafting intuitive and efficient solutions that truly resonate with users.
                </Text>
            </Box>
            <Button
                size={{ base: 'lg', md: 'lg', lg: 'lg', xl: 'lg' }}
                onClick={handleDownloadResume}
                variant="ghost"
                borderColor="white"
                borderWidth="2px"
                borderRadius="20px"
                bg='#6e07f3'
                color="white"
                _hover={{
                    bg: "white",
                    color: "#6e07f3",
                }}
            >
                Download Resume
            </Button>
        </Box>
    );
};

export default About;

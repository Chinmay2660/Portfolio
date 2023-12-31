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
            position="relative"
            backgroundColor="#6e07f3"
            color="#ffffff"
            height="700px"
        >
            <Box
                width="820px"
                height="200px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                marginBottom="70px"
            >
                <Text
                    fontSize="3xl"
                    fontWeight="bold"
                    padding="2"
                    position="relative"
                    zIndex="1"
                >
                    Hi, I’m Chinmay Bhoir.
                </Text>
                <Text
                    fontSize="xl"
                    padding="2"
                    position="relative"
                    zIndex="1"
                >
                    Currently working as Software Development Engineer (SDE - 1) at Jio Platforms Limited with a strong passion for innovation and problem-solving.
                    My journey has been a diverse one, beginning with my involvement in user acceptance testing — a role that allowed me to understand the balance between user expectations and technical execution.
                    This experience now guides my path as a Software Development Engineer, where I'm committed to crafting intuitive and efficient solutions that truly resonate with users.
                </Text>
            </Box>
            <Button colorScheme="teal" onClick={handleDownloadResume}>
                Download Resume
            </Button>
        </Box>
    );
};

export default About;

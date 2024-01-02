import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import ResumePDF from "../../Assets/Resume_Chinmay_Bhoir.pdf";

const About = () => {
  const handleDownloadResume = () => {
    window.open(ResumePDF, "_blank");
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
      height="auto"
      paddingX={{ base: "1rem", md: "2rem", lg: "3rem" }}
    >
      <Box
        width="100%"
        maxW="820px"
        height={{ base: "auto", md: "150px" }}
        marginBottom={{ base: "50px", md: "150px" }}
      >
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          padding="2"
        >
          Hi, I’m Chinmay Bhoir.
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} padding="2">
          Currently working as Software Development Engineer (SDE - 1) at Jio
          Platforms Limited with a strong passion for innovation and
          problem-solving. My journey has been a diverse one, beginning with my
          involvement in user acceptance testing — a role that allowed me to
          understand the balance between user expectations and technical
          execution. This experience now guides my path as a Software
          Development Engineer, where I'm committed to crafting intuitive and
          efficient solutions that truly resonate with users.
        </Text>
      </Box>
      <Button
        colorScheme="teal"
        size={{ base: "md", md: "lg" }}
        onClick={handleDownloadResume}
        marginY="2"
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default About;

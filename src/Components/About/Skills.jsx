import React from 'react';
import { Box, Text, Flex, VStack, Icon } from '@chakra-ui/react';
import { FaJava, FaReact, FaNodeJs, FaGithub, FaCode, FaGit, FaDatabase } from 'react-icons/fa';
import { SiRedux, SiTailwindcss } from 'react-icons/si';

const techStack = [
  { name: 'Java', icon: FaJava },
  { name: 'JavaScript', icon: FaReact },
  { name: 'React.js', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: FaNodeJs },
  { name: 'Redux', icon: SiRedux },
  { name: 'MongoDB', icon: FaDatabase },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
];

const toolStack = [
  { name: 'VS Code', icon: FaCode },
  { name: 'Git', icon: FaGit },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Postman', icon: FaCode },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="600px"
      bg="transparent"
      paddingBottom={20}
    >
      <Flex direction="column">
        <Box
          p={8}
          bg="#ffffff"
          color="black"
          border="0.5px solid black"
          borderRadius="15px 15px 0 0"
        >
          <VStack spacing={4}>
            <Text fontSize="xl" fontWeight="bold">
              Tech Stack
            </Text>
            <Flex align="center" flexDirection="row">
              {techStack.map((tech) => (
                <Flex key={tech.name} align="center" flexDirection="column" m={2}>
                  <Icon as={tech.icon} boxSize={8} />
                  <Text mt={2}>{tech.name}</Text>
                </Flex>
              ))}
            </Flex>
          </VStack>
        </Box>

        <Box
          p={8}
          bg="#ffffff"
          color="black"
          border="0.5px solid black"
          borderTop="none"
          borderRadius="0 0 15px 15px"
        >
          <VStack spacing={4}>
            <Text fontSize="xl" fontWeight="bold">
              Tool Stack
            </Text>
            <Flex align="center" flexDirection="row" >
              {toolStack.map((tool) => (
                <Flex key={tool.name} align="center" flexDirection="column" m={2}>
                  <Icon as={tool.icon} boxSize={8} />
                  <Text mt={2}>{tool.name}</Text>
                </Flex>
              ))}
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Skills;

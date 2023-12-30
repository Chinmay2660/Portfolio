import React from 'react';
import { Box, Text, Flex, VStack, Icon } from '@chakra-ui/react';
import { FaJava, FaReact, FaNodeJs, FaGithub, FaCode, FaGit, FaDatabase } from 'react-icons/fa';
import { SiRedux, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  return (
    <Box
      id="about"
      display="flex"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      position="relative"
      height="500px"
      zIndex={1}
    >
      <Flex direction="column">
        <Box
          p={8}
          bg="#ffffff"
          color="black"
          marginTop="-80%"
          boxShadow="0 4px 8px rgba(0,0,0,0.1)"
        >
          <VStack spacing={4}>
            <Text fontSize="xl" fontWeight="bold">
              Tech Stack
            </Text>
            {techStack.map((tech) => (
              <Flex key={tech.name} align="center">
                <Icon as={tech.icon} boxSize={6} />
                <Text ml={2}>{tech.name}</Text>
              </Flex>
            ))}
          </VStack>
        </Box>

        <Box
          p={8}
          bg="#ffffff"
          color="black"
          marginTop="-80%"
          boxShadow="0 4px 8px rgba(0,0,0,0.1)"
        >
          <VStack spacing={4}>
            <Text fontSize="xl">
              Tool Stack
            </Text>
            {toolStack.map((tool) => (
              <Flex key={tool.name} align="center">
                <Icon as={tool.icon} boxSize={6} />
                <Text ml={2}>{tool.name}</Text>
              </Flex>
            ))}
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

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

export default Skills;

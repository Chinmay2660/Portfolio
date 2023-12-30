import React from 'react';
import { Box, Text, Flex, VStack, HStack, Badge, Icon } from '@chakra-ui/react';
import { FaJava, FaReact, FaNodeJs, FaGithub, FaCode, FaGit, FaDatabase } from 'react-icons/fa';
import { SiRedux,  SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  return (
    <Flex position="relative" direction="column" alignItems="center">
      <Box
        position="absolute"
        width="100%"
        maxW="400px"
        bg="white"
        p="4"
        boxShadow="lg"
        borderRadius="md"
        marginRight={{ md: '50%' }}
        marginTop={{ base: '4', md: '0' }}
        // zIndex="1"
      >
        <Text fontSize="xl" fontWeight="bold" mb="4">
          Tech Stack
        </Text>
        <VStack align="start" spacing="2">
          {techStack.map((tech) => (
            <HStack key={tech.name} spacing="2">
              <Icon as={tech.icon} boxSize="5" />
              <Badge>{tech.name}</Badge>
            </HStack>
          ))}
        </VStack>
      </Box>

      <Box
        position="absolute"
        width="100%"
        maxW="400px"
        bg="white"
        p="4"
        boxShadow="lg"
        borderRadius="md"
        marginLeft={{ md: '50%' }}
        marginTop={{ base: '4', md: '0' }}
        // zIndex="1"
      >
        <Text fontSize="xl" fontWeight="bold" mb="4">
          Tool Stack
        </Text>
        <VStack align="start" spacing="2">
          {toolStack.map((tool) => (
            <HStack key={tool.name} spacing="2">
              <Icon as={tool.icon} boxSize="5" />
              <Badge>{tool.name}</Badge>
            </HStack>
          ))}
        </VStack>
      </Box>
    </Flex>
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

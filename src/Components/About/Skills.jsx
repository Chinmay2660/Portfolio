import React from 'react';
import { Box, Text, Flex, VStack, Icon } from '@chakra-ui/react';
import { FaJava, FaReact, FaNodeJs, FaGithub, FaGit, FaBootstrap } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiVisualstudiocode, SiMongodb, SiPostman, SiMui, SiChakraui, SiExpress, SiAzuredevops, SiNetlify } from 'react-icons/si';
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";

const techStack = [
  { name: 'C++', icon: TbBrandCpp },
  { name: 'Java', icon: FaJava },
  { name: 'JavaScript', icon: IoLogoJavascript },
  { name: 'React.js', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'Redux', icon: SiRedux },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Material UI', icon: SiMui },
  { name: 'Chakra UI', icon: SiChakraui },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Bootstrap', icon: FaBootstrap },
];

const toolStack = [
  { name: 'Git', icon: FaGit },
  { name: 'Postman', icon: SiPostman },
  { name: 'VS Code', icon: SiVisualstudiocode },
  { name: 'Azure Devops', icon: SiAzuredevops },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Netlify', icon: SiNetlify },
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

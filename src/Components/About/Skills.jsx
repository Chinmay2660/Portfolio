import React from 'react';
import { Flex, VStack, Icon, Text, Box, Grid } from '@chakra-ui/react';
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
  const boxSize = "120px";

  return (
    <Flex id="skills" alignItems="center" justifyContent="center" textAlign="center" bg="transparent" paddingBottom={20}>
      <VStack spacing={8}>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Text fontSize="xl" fontWeight="bold">Tech Stack</Text>
          <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(6, 1fr)", xl: "repeat(8, 1fr)" }} gap={4} justifyContent="center">
            {techStack.map((tech, index) => (
              <Box
                key={tech.name}
                m={2}
                p={4}
                bg="#ffffff"
                color="black"
                borderRadius="15px"
                textAlign="center"
                border="2px solid #6e07f3"
                height={boxSize}
                width={boxSize}
                boxShadow={`0 0 20px rgba(0, 0, 0, 0.2)`}
                transition="box-shadow 0.3s"
                _hover={{ boxShadow: `0 0 30px rgba(0, 0, 0, 0.5)` }}
              >
                <Icon as={tech.icon} boxSize={8} />
                <Text mt={2}>{tech.name}</Text>
              </Box>
            ))}
          </Grid>
        </Flex>

        <Flex direction="column" alignItems="center" justifyContent="center">
          <Text fontSize="xl" fontWeight="bold">Tool Stack</Text>
          <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(6, 1fr)", xl: "repeat(8, 1fr)" }} gap={4} justifyContent="center">
            {toolStack.map((tool, index) => (
              <Box
                key={tool.name}
                m={2}
                p={4}
                bg="#ffffff"
                color="black"
                borderRadius="15px"
                textAlign="center"
                border="2px solid #6e07f3"
                height={boxSize}
                width={boxSize}
                boxShadow={`0 0 20px rgba(0, 0, 0, 0.2)`}
                transition="box-shadow 0.3s"
                _hover={{ boxShadow: `0 0 30px rgba(0, 0, 0, 0.5)` }}
              >
                <Icon as={tool.icon} boxSize={8} />
                <Text mt={2}>{tool.name}</Text>
              </Box>
            ))}
          </Grid>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Skills;

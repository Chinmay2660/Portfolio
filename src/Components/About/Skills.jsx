import React from 'react';
import { Flex, VStack, Icon, Text, Box } from '@chakra-ui/react';
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
  const boxSize = "120px"; // Adjust the size as needed

  return (
    <Flex id="skills" alignItems="center" justifyContent="center" textAlign="center" height="600px" bg="transparent" paddingBottom={20}>
      <VStack spacing={8}>
        <Flex direction="column" alignItems="center">
          <Text fontSize="xl" fontWeight="bold">Tech Stack</Text>
          <Flex align="center" flexDirection="row" >
            {techStack.map((tech) => (
              <Box key={tech.name} m={2} p={4} bg="#ffffff" color="black" borderRadius="15px" textAlign="center" border="1px solid #6e07f3" height={boxSize} width={boxSize}>
                <Icon as={tech.icon} boxSize={8} />
                <Text mt={2}>{tech.name}</Text>
              </Box>
            ))}
          </Flex>
        </Flex>

        <Flex direction="column" alignItems="center">
          <Text fontSize="xl" fontWeight="bold">Tool Stack</Text>
          <Flex align="center" flexDirection="row" >
            {toolStack.map((tool) => (
              <Box key={tool.name} m={2} p={4} bg="#ffffff" color="black" borderRadius="15px" textAlign="center" border="1px solid #6e07f3" height={boxSize} width={boxSize}>
                <Icon as={tool.icon} boxSize={8} />
                <Text mt={2}>{tool.name}</Text>
              </Box>
            ))}
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Skills;
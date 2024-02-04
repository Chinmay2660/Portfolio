import React from 'react';
import { VStack, Icon, Text, Box, Flex } from '@chakra-ui/react';
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

const SkillCard = ({ name, icon }) => (
  <Flex
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    m={2}
    p={4}
    bg="#ffffff"
    color="black"
    borderRadius="15px"
    textAlign="center"
    border="2px solid #6e07f3"
    height="120px"
    width="120px"
    boxShadow={`0 0 20px rgba(0, 0, 0, 0.2)`}
    transition="box-shadow 0.3s"
    _hover={{ boxShadow: `0 0 30px rgba(0, 0, 0, 0.5)` }}
  >
    <Icon as={icon} boxSize={8} />
    <Text mt={2}>{name}</Text>
  </Flex>
);

const Skills = () => {
  return (
    <Box id="skills" textAlign="center" bg="transparent" paddingBottom={20} paddingTop={20}>
      <Box>
        <Text fontSize="3xl" fontWeight="bold" marginBottom={10}>Tech Stack</Text>
        <Flex flexWrap="wrap"
          justifyContent="center"
          alignItems="center">
          {techStack.map((tech, index) => (
            <SkillCard key={index} {...tech} />
          ))}
        </Flex>
      </Box>

      <Box>
        <Text fontSize="3xl" fontWeight="bold" marginBottom={10} paddingTop={10}>Tool Stack</Text>
        <Flex flexWrap="wrap"
          justifyContent="center"
          alignItems="center">
          {toolStack.map((tool, index) => (
            <SkillCard key={index} {...tool} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Skills;
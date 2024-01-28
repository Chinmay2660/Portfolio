import React from 'react';
import { Box, Flex, Image, Text, Button, Tooltip } from '@chakra-ui/react';

const ProjectCard = ({ image, title, description, githubLink, viewLink }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <Box
            maxW="300px"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            m="4"
            _hover={{
                boxShadow: 'md',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            position="relative"
        >
            <Box position="relative">
                <Image src={image} alt={title} h="200px" objectFit="cover" />

                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    display={isHovered ? 'flex' : 'none'}
                    justifyContent="center"
                    alignItems="center"
                    bg="rgba(0,0,0,0.5)"
                    color="white"
                >
                    <Box textAlign="center">
                        <Text fontWeight="bold" fontSize="xl" mb="2">
                            {title}
                        </Text>
                        <Text>{description}</Text>
                        <Tooltip label="GitHub" hasArrow>
                        <Button as="a" href={githubLink} target="_blank" rel="noopener noreferrer" colorScheme="teal">
                            GitHub
                        </Button>
                    </Tooltip>
                    <Tooltip label="View" hasArrow>
                        <Button as="a" href={viewLink} target="_blank" rel="noopener noreferrer" colorScheme="blue">
                            View
                        </Button>
                    </Tooltip>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

const ProjectCards = () => {
    const projects = [
        {
            id: 1,
            image: 'https://placekitten.com/300/200',
            title: 'Project 1',
            description: 'Description for Project 1.',
            githubLink: 'https://github.com/example/project1',
            viewLink: 'https://example.com/project1',
        },
        {
            id: 2,
            image: 'https://placekitten.com/300/201',
            title: 'Project 2',
            description: 'Description for Project 2.',
            githubLink: 'https://github.com/example/project2',
            viewLink: 'https://example.com/project2',
        },
        {
            id: 3,
            image: 'https://placekitten.com/300/202',
            title: 'Project 3',
            description: 'Description for Project 3.',
            githubLink: 'https://github.com/example/project3',
            viewLink: 'https://example.com/project3',
        },
        {
            id: 4,
            image: 'https://placekitten.com/300/200',
            title: 'Project 1',
            description: 'Description for Project 1.',
            githubLink: 'https://github.com/example/project1',
            viewLink: 'https://example.com/project1',
        },
        {
            id: 5,
            image: 'https://placekitten.com/300/201',
            title: 'Project 2',
            description: 'Description for Project 2.',
            githubLink: 'https://github.com/example/project2',
            viewLink: 'https://example.com/project2',
        },
        {
            id: 6,
            image: 'https://placekitten.com/300/202',
            title: 'Project 3',
            description: 'Description for Project 3.',
            githubLink: 'https://github.com/example/project3',
            viewLink: 'https://example.com/project3',
        },
    ];

    return (
        <Flex
            id="projects"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            backgroundColor="transparent"
            position="relative"
            zIndex="0"
            marginTop="-200px"
        >
            {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </Flex>
    );
};

export default ProjectCards;

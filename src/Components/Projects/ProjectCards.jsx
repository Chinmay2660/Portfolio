import React from 'react';
import { Box, Flex, Image, Text, Button, Tooltip } from '@chakra-ui/react';

const ProjectCard = ({ image, title, description, githubLink, viewLink }) => {
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
        >
            <Image src={image} alt={title} h="200px" objectFit="cover" />

            <Box p="4">
                <Text fontWeight="bold" fontSize="xl" mb="2">
                    {title}
                </Text>
                <Text color="gray.600">{description}</Text>
            </Box>

            <Flex justify="space-between" p="4">
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
            </Flex>
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
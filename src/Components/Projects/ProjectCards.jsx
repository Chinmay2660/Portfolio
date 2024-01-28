import React, { useState } from 'react';
import { Box, Flex, Image, Text, Button, Tooltip, useBreakpointValue } from '@chakra-ui/react';

const ProjectCard = ({ image, title, description, githubLink, viewLink }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardWidth = useBreakpointValue({ base: "350px", md: "400px", lg: "500px", xl: "500px" });
    const cardHeight = useBreakpointValue({ base: "350px", md: "400px", lg: "500px", xl: "500px" });

    return (
        <Box
            maxW={cardWidth}
            maxH={cardHeight}
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
            <Box position="relative" >
                <Image src={image} alt={title} h="250px" objectFit="cover" />
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    display={isHovered ? 'flex' : 'none'}
                    justifyContent="center"
                    alignItems="center"
                    bg="#141c3a"
                    color="white"
                >
                    <Box textAlign="center">
                        <Text fontWeight="bold" fontSize="xl" mb="2">
                            {title}
                        </Text>
                        <Text>{description}</Text>
                        <Tooltip label="GitHub" hasArrow>
                            <Button
                                as="a" href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                size="lg"
                                paddingX="5"
                                paddingY="3"
                                variant="ghost"
                                borderColor="#6e07f3"
                                borderWidth="2px"
                                borderRadius="20px"
                                bg='#141c3a'
                                color="white"
                                marginTop='5'
                                marginBottom='5'
                                marginRight='2'
                                _hover={{
                                    bg: "#6e07f3",
                                    color: "white",
                                }}
                            >
                                Github
                            </Button>
                        </Tooltip>
                        <Tooltip label="View" hasArrow>
                            <Button
                                as="a" href={viewLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                size="lg"
                                paddingX="5"
                                paddingY="3"
                                variant="ghost"
                                borderColor="#6e07f3"
                                borderWidth="2px"
                                borderRadius="20px"
                                bg='#141c3a'
                                color="white"
                                marginTop='5'
                                marginBottom='5'
                                marginLeft='2'
                                _hover={{
                                    bg: "#6e07f3",
                                    color: "white",
                                }}
                            >
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
            marginTop="70px"
            marginBottom="70px"
        >
            {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
            ))}
        </Flex>
    );
};

export default ProjectCards;

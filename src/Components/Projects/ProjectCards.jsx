import React, { useState } from 'react';
import { Box, Flex, Image, Text, Button, useBreakpointValue } from '@chakra-ui/react';
import Tilt from 'react-parallax-tilt';
import { FiExternalLink } from "react-icons/fi";
import { FaArrowDown } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

const ProjectCard = ({ image, title, description, githubLink, viewLink }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const cardWidth = useBreakpointValue({ base: "350px", md: "400px", lg: "500px", xl: "500px" });
    const cardHeight = useBreakpointValue({ base: "350px", md: "400px", lg: "500px", xl: "500px" });

    return (
        <Tilt
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
        >
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
                <Box position="relative">
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
                                <FaCode style={{ marginLeft: '0.5rem', marginTop: '3px', marginBottom: '3px' }} size="20px" />
                            </Button>
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
                                <FiExternalLink style={{ marginLeft: '0.5rem', marginTop: '3px', marginBottom: '3px' }} size="20px" />
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Tilt>
    );
};

const ProjectCards = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);

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
        {
            id: 7,
            image: 'https://placekitten.com/300/200',
            title: 'Project 1',
            description: 'Description for Project 1.',
            githubLink: 'https://github.com/example/project1',
            viewLink: 'https://example.com/project1',
        },
        {
            id: 8,
            image: 'https://placekitten.com/300/201',
            title: 'Project 2',
            description: 'Description for Project 2.',
            githubLink: 'https://github.com/example/project2',
            viewLink: 'https://example.com/project2',
        },
        {
            id: 9,
            image: 'https://placekitten.com/300/202',
            title: 'Project 3',
            description: 'Description for Project 3.',
            githubLink: 'https://github.com/example/project3',
            viewLink: 'https://example.com/project3',
        },
    ];

    const visibleProjects = showAllProjects ? projects : projects.slice(0, 6);

    return (
        <>
            <Flex
                id="projects"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
                marginTop="70px"
                marginBottom="70px"
            >
                {visibleProjects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </Flex>
            {!showAllProjects && (
                <Flex justifyContent="center" marginTop="-60px" marginBottom="25px">
                    <Button
                        onClick={() => setShowAllProjects(true)}
                        size="lg"
                        paddingX="5"
                        paddingY="3"
                        variant="ghost"
                        borderColor="#6e07f3"
                        borderWidth="2px"
                        borderRadius="20px"
                        bg='white'
                        color="#6e07f3"
                        marginTop='5'
                        marginBottom='5'
                        _hover={{
                            bg: "#6e07f3",
                            color: "white",
                        }}
                    >
                        See more projects
                        <FaArrowDown style={{ marginLeft: '0.5rem', marginTop: '3px', marginBottom: '3px' }} size="20px" />
                    </Button>
                </Flex>
            )}
        </>
    );
};

export default ProjectCards;
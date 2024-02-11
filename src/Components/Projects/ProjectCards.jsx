import React, { useState } from 'react';
import { Box, Flex, Image, Text, Button, useBreakpointValue } from '@chakra-ui/react';
import Tilt from 'react-parallax-tilt';
import { FiExternalLink } from "react-icons/fi";
import { FaArrowDown } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import Dicee_game_img from '../../Assets/Projects/dicee_game.jpeg'
import Drum_kit_img from '../../Assets/Projects/drum_kit.jpeg'
import Github_viewer_img from '../../Assets/Projects/github_viewer.jpeg'
import Gpt_img from '../../Assets/Projects/gpt.jpeg'
import Keeper_app_img from '../../Assets/Projects/keeper_app.jpeg'
import Simon_game_img from '../../Assets/Projects/simon_game.jpeg'
import Tindog_img from '../../Assets/Projects/tindog.jpeg'
import Todolist_img from '../../Assets/Projects/todolist.jpeg'
import Tournament_app from '../../Assets/Projects/tournament app.jpeg'

const ProjectCard = ({ image, title, description, githubLink, viewLink }) => {
    const [isHovered, setIsHovered] = useState(false);
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
                            {githubLink && (
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
                                    <FaCode style={{ marginLeft: '0.5rem', marginTop: '3px' }} size="20px" />
                                </Button>
                            )}
                            {viewLink && (
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
                            )}
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
            image: Gpt_img,
            title: 'GPT-3',
            description: 'Landing page built using Reactjs and Tailwindcss',
            githubLink: 'https://github.com/Chinmay2660/gpt',
            viewLink: 'https://chinmay2660-gpt3.netlify.app/',
        },
        {
            id: 2,
            image: Keeper_app_img,
            title: 'Keeper App',
            description: 'Note-taking web application built using Reactjs designed to help users create, read, and delete notes, making it a valuable tool for personal and professional use.',
            githubLink: 'https://github.com/Chinmay2660/Keeper-app',
            viewLink: 'https://chinmay2660-keeper-app.netlify.app/',
        },
        {
            id: 3,
            image: Tindog_img,
            title: 'Tindog',
            description: 'Built using Bootsrap, HTML and CSS. Landing page which allows users to browse and connect with other dog owners in their area',
            githubLink: 'https://github.com/Chinmay2660/Tindog',
            viewLink: 'https://chinmay2660.github.io/Tindog/',
        },
        {
            id: 4,
            image: Tournament_app,
            title: 'Score Board App',
            description: 'Web App to organize and track tournaments. Built using Reactjs where users can enter details of teams and players names, game type and winners',
            githubLink: 'https://github.com/Chinmay2660/ui-tournament',
        },
        {
            id: 5,
            image: Todolist_img,
            title: 'ToDoList',
            description: 'Built using HTML, CSS and Javascript to manage daily tasks by adding and deleting',
            githubLink: 'https://github.com/Chinmay2660/ToDoList',
            viewLink: 'https://crazy-elk.cyclic.app/',
        },
        {
            id: 6,
            image: Dicee_game_img,
            title: 'Dicee Game',
            description: ' Web-based game where users can roll two dice and see who gets the higher score. The game is built with HTML, CSS, and JavaScript.',
            githubLink: 'https://github.com/Chinmay2660/DiceeGame',
            viewLink: 'https://chinmay2660.github.io/DiceeGame/',
        },
        {
            id: 7,
            image: Drum_kit_img,
            title: 'Drum Kit',
            description: 'DrumKit is a web application that allows users to play drum sounds by clicking on images of drums or using the corresponding keyboard keys. The application is built with HTML, CSS, and JavaScript and includes seven different drum sounds.',
            githubLink: 'https://github.com/Chinmay2660/DrumKit',
            viewLink: 'https://chinmay2660.github.io/DrumKit/',
        },
        {
            id: 8,
            image: Simon_game_img,
            title: 'Simon Game',
            description: 'Simon Game is a classic memory game built with HTML, CSS, and JavaScript. The game has four colored buttons that light up and play a sound in a specific pattern, and the player must repeat the pattern by clicking the buttons in the correct order. The game starts with a simple pattern and increases in complexity as the player progresses.',
            githubLink: 'https://github.com/Chinmay2660/SimonGame',
            viewLink: 'https://chinmay2660.github.io/SimonGame/',
        },
        {
            id: 9,
            image: Github_viewer_img,
            title: 'Github Viewer',
            description: 'GitHub Viewer is a simple web application that allows users to view GitHub user profiles and repositories. Users can search for a GitHub username, and the application will display information about the user profile.',
            githubLink: 'https://github.com/Chinmay2660/Github-Viewer',
            viewLink: 'https://chinmay2660.github.io/Github-Viewer/',
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
                marginTop="40px"
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
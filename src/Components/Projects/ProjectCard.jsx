import React, { useState } from 'react';
import { Box, Image, Text, Button, useBreakpointValue } from '@chakra-ui/react';
import Tilt from 'react-parallax-tilt';
import { FiExternalLink } from "react-icons/fi";
import { FaCode } from "react-icons/fa";

const ProjectCard = ({ image, title, description, githubLink, viewLink }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardWidth = useBreakpointValue({ base: "350px", md: "400px", lg: "500px", xl: "500px" });
    const cardHeight = useBreakpointValue({ base: "350px", md: "400px", lg: "500px", xl: "500px" });

    return (
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <Box
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
                maxW={cardWidth}
                maxH={cardHeight}
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

export default ProjectCard;

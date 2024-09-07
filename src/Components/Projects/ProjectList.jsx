import React, { useState } from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { FaArrowDown } from "react-icons/fa6";
import ProjectCard from './ProjectCard';
import projectsData from './projectsData';

const ProjectList = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);

    const visibleProjects = showAllProjects ? projectsData : projectsData.slice(0, 6);

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

export default ProjectList;

import React from 'react';
import {
  Flex,
  Image,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button,
  Stack,
  useDisclosure,
  IconButton
} from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import { CloseIcon } from '@chakra-ui/icons';
import logo from '../../Assets/logo192.png';
import Hamburger from 'hamburger-react';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p="1.25rem"
      bg="white"
      color="#141C3A"
      position="sticky"
      top="0"
      zIndex="1000"
      direction={{ base: 'row', md: 'row' }}
    >
      <Image src={logo} alt="Logo" boxSize="50px" />

      <Box display={{ base: 'block', md: 'none' }}>
        <Hamburger toggled={isOpen} toggle={onOpen} />
      </Box>

      <Stack direction="row" spacing={4} display={{ base: 'none', md: 'flex' }} justifyContent="center"> {/* Center the content */}
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <Button variant="ghost">Home</Button>
        </ScrollLink>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <Button variant="ghost">About</Button>
        </ScrollLink>
        <ScrollLink
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <Button variant="ghost">Skills</Button>
        </ScrollLink>
        {/* <ScrollLink
          to="work"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <Button variant="ghost">Work</Button>
        </ScrollLink> */}
        <ScrollLink
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <Button variant="ghost">Projects</Button>
        </ScrollLink>
        <ScrollLink
          to="hireMe"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <Button
            variant="ghost"
            borderColor="#6e07f3"
            borderWidth="2px"
            borderRadius="20px"
            color="#6e07f3"
            _hover={{
              bg: "#6e07f3",
              color: "white",
            }}
          >
            Hire Me
          </Button>
        </ScrollLink>
      </Stack>

      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Flex direction="column" alignItems="center" marginTop="0.6rem" marginBottom="1rem">
              <IconButton
                icon={<CloseIcon />}
                aria-label="Close"
                onClick={onClose}
                position="absolute"
                top="1rem"
                right="1rem"
              />
              <Stack direction="column" spacing={4} alignItems="center">
                <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={onClose}
                >
                  <Button variant="ghost">Home</Button>
                </ScrollLink>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={onClose}
                >
                  <Button variant="ghost">About</Button>
                </ScrollLink>
                <ScrollLink
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={onClose}
                >
                  <Button variant="ghost">Skills</Button>
                </ScrollLink>
                {/* <ScrollLink
                  to="work"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={onClose} 
                >
                  <Button variant="ghost">Work</Button>
                </ScrollLink> */}
                <ScrollLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={onClose}
                >
                  <Button variant="ghost">Projects</Button>
                </ScrollLink>
                <ScrollLink
                  to="hireMe"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={onClose}
                >
                  <Button
                    variant="ghost"
                    borderColor="#6e07f3"
                    borderWidth="2px"
                    borderRadius="20px"
                    color="#6e07f3"
                    _hover={{
                      bg: '#6e07f3',
                      color: 'white',
                    }}
                  >
                    Hire Me
                  </Button>
                </ScrollLink>
              </Stack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </Flex>
  );
};

export default Navbar;

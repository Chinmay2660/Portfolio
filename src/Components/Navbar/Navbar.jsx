import React from 'react';
import {
  Flex,
  Image,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  Button,
  Stack,
} from '@chakra-ui/react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logo from '../../Assets/logo192.png';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

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
      <Box display={{ base: 'block', md: 'none' }} onClick={onOpen} cursor="pointer">
        ☰
      </Box>

      <Stack direction="row" spacing={4} display={{ base: 'none', md: 'flex' }}>
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
          <Button variant="ghost">Hire Me</Button>
        </ScrollLink>
      </Stack>

      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Stack direction="column" spacing={4}>
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={onClose}
              >
                <Button w="100%" variant="ghost">
                  Home
                </Button>
              </ScrollLink>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={onClose}
              >
                <Button w="100%" variant="ghost">
                  About
                </Button>
              </ScrollLink>
              <ScrollLink
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={onClose}
              >
                <Button w="100%" variant="ghost">
                  Skills
                </Button>
              </ScrollLink>
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={onClose}
              >
                <Button w="100%" variant="ghost">
                  Projects
                </Button>
              </ScrollLink>
              <ScrollLink
                to="hireMe"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={onClose}
              >
                <Button w="100%" variant="ghost">
                  Hire Me
                </Button>
              </ScrollLink>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;

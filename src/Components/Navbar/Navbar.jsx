import React, { useState } from 'react';
import {
  Flex,
  Image,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Button,
  Stack,
} from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../../Assets/logo192.png';
import Hamburger from 'hamburger-react';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      onOpen();
    } else {
      onClose();
    }
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

      <Box display={{ base: 'block', md: 'none' }} onClick={handleMobileMenuToggle} cursor="pointer">
        <Hamburger toggled={isMobileMenuOpen} size={30} />
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

      <Modal isOpen={isOpen && isMobileMenuOpen} onClose={onClose} size="xs">
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
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
              {/* <ScrollLink
                to="work"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={onClose}
              >
                <Button w="100%" variant="ghost">
                  Work
                </Button>
              </ScrollLink> */}
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Navbar;
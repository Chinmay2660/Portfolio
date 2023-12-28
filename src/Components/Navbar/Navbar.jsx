import React from 'react';
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  Flex,
  Image,
  Tab,
  TabList,
  Tabs,
} from '@chakra-ui/react';
import logo from '../../Assets/logo192.png';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex justifyContent="space-between" alignItems="center" p="1.25rem" bg="white" color="#141C3A" boxShadow="none" mt={7} mb={7}>
      <Image src={logo} alt="Logo" boxSize="50px" />

      <Tabs display={{ base: 'none', md: 'flex' }}>
        <TabList>
          <Tab>Home</Tab>
          <Tab>About</Tab>
          <Tab>Experience</Tab>
          <Tab>Education</Tab>
          <Tab>Projects</Tab>
          <Tab>Contact</Tab>
        </TabList>
      </Tabs>

      <Box display={{ base: 'block', md: 'none' }} onClick={onOpen}>
        ☰
      </Box>

      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Tabs orientation="vertical">
              <TabList>
                <Tab onClick={onClose}>Home</Tab>
                <Tab onClick={onClose}>About</Tab>
                <Tab onClick={onClose}>Experience</Tab>
                <Tab onClick={onClose}>Education</Tab>
                <Tab onClick={onClose}>Projects</Tab>
                <Tab onClick={onClose}>Contact</Tab>
              </TabList>
            </Tabs>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;

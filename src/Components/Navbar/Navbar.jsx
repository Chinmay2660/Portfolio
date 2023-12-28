import React from 'react';
import { Box, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, useDisclosure, Link} from '@chakra-ui/react';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Box
        bg='orange'
        w='100%'
        p='1.25rem'
        color='#141C3A'
        zIndex='auto'
        boxShadow='none'
        mt={7}
        mb={7}
        display={{ base: 'none', md: 'block' }} 
      >
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Experience</Link>
          <Link>Education</Link>
          <Link>Projects</Link>
          <Link>Contact</Link>
      </Box>
{/* 
      <Box
        bg='tomato'
        w='100%'
        p='1.25rem'
        color='white'
        zIndex='auto'
        boxShadow='none'
        mt={7}
        display={{ base: 'block', md: 'none' }}
      >
        <Box mt={4} onClick={onOpen}>
          Menu
        </Box>

        <Drawer isOpen={isOpen} onClose={onClose} placement="right">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Link onClick={onClose}>Home</Link>
              <Link onClick={onClose}>About</Link>
              <Link onClick={onClose}>Experience</Link>
              <Link onClick={onClose}>Education</Link>
              <Link onClick={onClose}>Projects</Link>
              <Link onClick={onClose}>Contact</Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box> */}
    </div>
  );
};

export default Navbar;

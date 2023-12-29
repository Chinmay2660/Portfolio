import React from 'react';
import avatar from '../../Assets/avatar.svg';
import { Box, Text } from '@chakra-ui/react';
import Tilt from 'react-parallax-tilt';
import devices from '../../Assets/hero-devices.svg';

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      marginTop={{ base: 4 + 20, md: 8 + 20, lg: 12 + 80 }}
    >
      <Text fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} fontWeight="bold">
        Software Development Engineer at Jio
      </Text>
      <Text fontSize={{ base: 'xl', md: '2xl' }} marginTop={{ base: 4, md: 6 }}>
        I design and code beautifully simple things, and I love what I do.
      </Text>
      <Tilt>
        <img
          src={avatar}
          alt="Avatar"
          style={{
            marginTop: '50px',
            width: '100%',
            maxWidth: ['150px', '210px'], 
          }}
        />
      </Tilt>
      <img
        src={devices}
        alt="Devices"
        style={{ marginTop: '80px', width: '100%', maxWidth: '860px' }}
      />
    </Box>
  );
};

export default Home;

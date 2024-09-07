import React from 'react';
import avatar from '../../Assets/avatar.svg';
import { Box, Text, useBreakpointValue } from '@chakra-ui/react';
import Tilt from 'react-parallax-tilt';
import devices from '../../Assets/hero-devices.svg';

const Home = () => {
  const avatarMaxWidth = useBreakpointValue({ base: '150px', md: '180px', lg: '210px' });
  return (
    <Box
      id="home"
      display="grid"
      placeItems="center"
      textAlign="center"
      paddingTop={{ base: '4rem', md: '6rem', lg: '7rem' }}
    >
      <Text fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} fontWeight="bold">
        Software Development Engineer
      </Text>
      <Text
        fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
        marginTop={{ base: 4, md: 6, lg: 6 }}
        marginLeft={{ base: 6, md: 0 }}
        marginRight={{ base: 6, md: 0 }}
      >
        I design and code beautifully simple things, and I love what I do.
      </Text>
      <Tilt>
        <img
          src={avatar}
          alt="Avatar"
          style={{
            marginTop: '50px',
            width: '100%',
            maxWidth: avatarMaxWidth,
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

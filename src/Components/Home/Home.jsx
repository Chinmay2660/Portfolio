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
            marginTop="100px"
        >
            <Text fontSize="5xl" fontWeight="bold">
                Software Development Engineer at Jio
            </Text>
            <Text fontSize="2xl" style={{marginTop: '30px'}}>
                I design and code beautifully simple things, and I love what I do.
            </Text>
            <Tilt>
                <img src={avatar} alt="Avatar" style={{ marginTop: '100px' }} />
            </Tilt>
            <img
                src={devices}
                alt="Devices"
                style={{ marginTop: '100px', width: '700px' }}
            />
        </Box>
    );
};

export default Home;

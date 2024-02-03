import React, { useState } from 'react';
import { Box, Text, Button, Flex } from '@chakra-ui/react';
import { TbMessage } from "react-icons/tb";
import ContactForm from './ContactForm';

const Contact = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    const handleOpenContactForm = () => {
        setIsContactFormOpen(true);
    };

    const handleCloseContactForm = () => {
        setIsContactFormOpen(false);
    };

    return (
        <Flex
            id="hireMe"
            direction="column"
            align="center"
            justify="center"
            textAlign="center"
            position="relative"
            backgroundColor="transparent"
            color="black"
            height={{ base: "auto", md: "612px" }}
            borderColor="gray.300"
            padding={{ base: "20px", md: "40px", lg: '20px', xl: '20px' }}
            paddingBottom={{ base: '20px', md: '-500px' }}
            marginBottom={{ md: '-250' }}
            marginTop={{ md: '-50' }}
        >
            <Box width={{ base: "90%", md: "90%" }} marginTop={{ base: "-10", md: "-350px" }} marginBottom={{ base: "0", md: "20px" }}>
                <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" padding="2" zIndex="1">
                    Interested in collaborating with me?
                </Text>
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="600" padding="2" zIndex="1">
                    I’m always open to discussing product design work or partnership opportunities.
                </Text>
            </Box>
            <Button
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
                onClick={handleOpenContactForm}
            >
                <TbMessage style={{ marginRight: '0.5rem', marginTop: '4.5px' }} size="22px" />
                Start a conversation
            </Button>

            {isContactFormOpen && <ContactForm isOpen={isContactFormOpen} onClose={handleCloseContactForm} />}
        </Flex>
    );
};

export default Contact;

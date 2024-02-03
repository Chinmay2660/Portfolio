import React from 'react';
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
    Input,
    useBreakpointValue,
} from '@chakra-ui/react';

const ContactForm = ({ isOpen, onClose }) => {
    const modalSize = useBreakpointValue({ base: "full", md: "md", lg: "lg", xl: "xl" });

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={modalSize} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Contact</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input type="text" placeholder="Your name" />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Email Address</FormLabel>
                        <Input type="email" placeholder="Your email address" />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Message</FormLabel>
                        <Input as="textarea" placeholder="Your message" />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button variant="ghost" onClick={onClose}>
                        Close
                    </Button>
                    <Button colorScheme="blue" mr={3} >Send</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ContactForm;

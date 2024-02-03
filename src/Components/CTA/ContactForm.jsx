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
} from '@chakra-ui/react';

const ContactForm = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Contact Us</ModalHeader>
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
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Send</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ContactForm;
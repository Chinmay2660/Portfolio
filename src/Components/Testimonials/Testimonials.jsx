import React, { useRef, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import {
  Carousel,
  CarouselItem,
  useCarouselItem,
  CarouselItems,
  useCarousel
} from "chakra-framer-carousel";
import { ChevronLeft, ChevronRight } from "react-feather";

const testimonials = [
  {
    name: "Jane Cooper",
    title: "CEO at ABC Corporation",
    bg: "red.200",
    src:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    heading: "Efficient Collaborating"
  },
  {
    name: "Kai Doe",
    title: "VP of Engineering",
    bg: "orange.200",
    src:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    heading: "Intuitive Design"
  },
  {
    name: "Gina Smith",
    title: "Product Manager",
    bg: "blue.200",
    src:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    heading: "Mindblowing Service"
  },
  {
    name: "Brad Watkins",
    title: "Founder",
    bg: "purple.200",
    src:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    heading: "Game Changer!"
  }
];

const TestimonialHeading = ({ children }) => (
  <Heading as={"h3"} fontSize={"xl"}>
    {children}
  </Heading>
);

const TestimonialAvatar = ({ src, name, title }) => (
  <Flex align={"center"} mt={8} direction={"column"}>
    <Avatar src={src} mb={2} />
    <Stack spacing={-1} align={"center"}>
      <Text fontWeight={600}>{name}</Text>
      <Text fontSize={"sm"} color="gray.600">
        {title}
      </Text>
    </Stack>
  </Flex>
);

const Testimonial = ({ bg, heading }) => {
  const { onClickHandler, position } = useCarouselItem();
  const isCenter = position === "center";
  return (
    <Flex
      w={isCenter ? "375px" : "325px"}
      h={isCenter ? "250px" : "200px"}
      pos="relative"
      boxShadow="lg"
      align="center"
      as="button"
      onClick={onClickHandler}
      bg={bg}
      rounded="xl"
      justify="center"
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: bg,
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)"
      }}
    >
      <VStack p={10}>
        <TestimonialHeading>{heading}</TestimonialHeading>
        <Text
          fontSize="sm"
          textAlign="center"
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.`}</Text>
      </VStack>
    </Flex>
  );
};

const Arrow = ({ isLeft }) => {
  const { onNext, onPrevious } = useCarousel();

  const onClickHandler = () => {
    if (isLeft) {
      onPrevious();
    } else {
      onNext();
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      onNext();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [onNext]);

  const pos = isLeft ? { left: "10px" } : { right: "10px" };

  return (
    <Flex pos="absolute" {...pos} top="35%">
      <Button size="lg" variant="solid" onClick={onClickHandler}>
        {isLeft ? <ChevronLeft /> : <ChevronRight />}
      </Button>
    </Flex>
  );
};

const TestimonialDemo = () => (
  <Flex flexDir="column" justifyContent="center" alignItems="center">
    <Carousel>
      <Flex w="fit-content" pos="relative" justifyContent="center" alignItems="center">
        <CarouselItems mx={2}>
          {testimonials.map(({ name, title, bg, src, heading }, index) => (
            <CarouselItem index={index} key={name}>
              <Box p={10}>
                <Testimonial heading={heading} bg={bg} />
                <TestimonialAvatar src={src} name={name} title={title} />
              </Box>
            </CarouselItem>
          ))}
        </CarouselItems>
        <Arrow isLeft />
        <Arrow isLeft={false} />
      </Flex>
    </Carousel>
  </Flex>
);


const Page = () => (
  <Box p={10} h="full" w="full" bg="white">
    <Stack spacing={2} align="center" marginBottom="-50px" marginTop="30px">
      <Heading color="gray.900">Testimonials</Heading>
      <Text fontSize="xl">People I've worked with have said some nice things...</Text>
    </Stack>
    <Container maxW="7xl" py={16} as={Stack} spacing={12} marginBottom="50px">
      <TestimonialDemo />
    </Container>
  </Box>
);


export default Page;

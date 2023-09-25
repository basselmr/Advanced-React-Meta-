import { Heading, HStack, Image, Text, VStack,Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box background="white" borderRadius="15px" color="black">
      <Image src={imageSrc} borderRadius="15px" />
      <VStack align="start" padding="20px">
        <Heading size="md">{title}</Heading>
        <Text noOfLines={[6]}>{description}</Text>
        <HStack>
          <Text>see more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
        </HStack>
      </VStack>     
  </Box>
  )
};

export default Card;

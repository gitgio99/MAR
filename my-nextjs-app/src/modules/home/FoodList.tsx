import React from 'react';
import { Flex, Text, Box, Button, VStack, Center, Image } from "@chakra-ui/react";
import FoodCard from "./FoodCard";
import { useFridge } from "../swr/useFridge";
import { FaFileAlt } from "react-icons/fa";
import { useDisclosure } from "@chakra-ui/react";
import GenerateModal from "./GenerateModal";

export default function FoodList() {
  const { data } = useFridge();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex padding="20px" direction="row" justifyContent="space-between">
      {/* Left side: Fridge contents */}
      <Box width="60%">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          In Your Fridge..
        </Text>
        {data?.items.length ? (
          <Flex direction="column" gap={4}>
            {data.items.map((item: any, index: any) => (
              <FoodCard key={index} data={item} />
            ))}
          </Flex>
        ) : (
          <Text>Your fridge is empty.</Text>
        )}
      </Box>

      {/* Right side: Recipes */}
      <Box width="35%">
        <VStack align="stretch" spacing={4}>
          <Text fontSize="xl" fontWeight="bold">Recipes</Text>
          <Center>
            <Image src="smartfridge.png" height={"300px"}></Image>
          </Center>


          <Button 
            leftIcon={<FaFileAlt />} 
            colorScheme="purple" 
            variant="solid"
            size="lg"
            borderRadius={"10px"}
            bg="#6B46C1"
            _hover={{ bg: "#805AD5" }}
            _active={{ bg: "#6B46C1" }}
            onClick={onOpen}
          >
            Generate Recipe
          </Button>
          <GenerateModal isOpen={isOpen} onClose={onClose} />
          <Box bg="gray.100" p={4} borderRadius="md">
            <Text>Recipe suggestions will appear here.</Text>
          </Box>
        </VStack>
      </Box>
    </Flex>
  );
}

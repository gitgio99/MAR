import {
  Box,
  Button,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Text,
  VStack,
  useClipboard,
} from "@chakra-ui/react";

interface Props {
  reply: string;
  clearAllState: () => void;
}

export default function RecipeReply({ reply, clearAllState }: Props) {
  const { hasCopied, onCopy } = useClipboard(reply);

  return (
    <>
      <ModalHeader>Generate Recipe</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <VStack align="stretch" spacing={4}>
          <text>{reply}</text>
          <Button onClick={onCopy} colorScheme="teal" size="sm">
            {hasCopied ? "Copied!" : "Copy Recipe"}
          </Button>
        </VStack>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={clearAllState}>
          Close
        </Button>
        <Button colorScheme="green" onClick={() => {/* Implement save functionality */}}>
          Save Recipe
        </Button>
      </ModalFooter>
    </>
  );
}

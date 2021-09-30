import React from "react";
import {
  VStack,
  HStack,
  Avatar,
  Image,
  Text,
  NativeBaseProvider,
  AspectRatio,
  Center,
  Box,
  Stack,
  Heading,
} from "native-base";

function CardComponent() {
  return (
    <VStack alignItems="center" space={4}>
      <Heading textAlign="center" mb="10">
        BogosGames
      </Heading>
      <HStack space={4}>
        <Center w="64" h="20" bg="primary.500" rounded="md" shadow={3}>
          Dobrescu are pula ok.
        </Center>
        <Center
          w="64"
          h="20"
          bg="secondary.500"
          rounded="md"
          shadow={3}
        ></Center>
      </HStack>
      <HStack space={4}>
        <Center w="64" h="20" bg="primary.500" rounded="md" shadow={3}>
          Dragos are pula ok.
        </Center>
        <Center
          w="64"
          h="20"
          bg="secondary.500"
          rounded="md"
          shadow={3}
        ></Center>
      </HStack>
      <HStack space={4}>
        <Center w="64" h="20" bg="primary.500" rounded="md" shadow={3}>
          Relu are pula ok.
        </Center>
        <Center
          w="64"
          h="20"
          bg="secondary.500"
          rounded="md"
          shadow={3}
        ></Center>
      </HStack>
    </VStack>
  );
}

export default function () {
  return <CardComponent />;
}

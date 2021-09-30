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

    <VStack space={4} alignItems="center">
      <Heading textAlign="center" mb="10">
        VStack
      </Heading>
      <Center w="64" h="20" bg="primary.500" rounded="md" shadow={3}>
        Dobrescu are pula ok.
      </Center>
      <Center w="64" h="20" bg="secondary.500" rounded="md" shadow={3} />
      <Center w="64" h="20" bg="emerald.500" rounded="md" shadow={3} />
    </VStack>
  );
}

export default function () {
  return (
    <Center flex={1} px="3">
      <CardComponent />
    </Center>
  );
}

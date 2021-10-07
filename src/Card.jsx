import React from "react";
import {
  VStack,
  HStack,
  Button,
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
import { Pressable } from "react-native";

const handleEvent = (eventName) => {
  return () => {
    const limit = 10;
    updateEventLog((state) => {
      const nextState = state.slice(0, limit - 1);
      nextState.unshift(eventName);
      return nextState;
    });
  };
};

function CardComponent() {
  return (
    <VStack alignItems="center" space={4}>
      <Heading textAlign="center" mb="10">
        BogosGames
      </Heading>
      <HStack space={4}>
        <Button>Dobrescu are pula ok.</Button>
        <Button>Mihai are pula ok.</Button>
      </HStack>
      <HStack space={4}>
        <Button>Dragos are pula ok.</Button>
        <Button>Relu are pula ok.</Button>
      </HStack>
      <HStack space={4}>
        <Button>Stefan nu are pula ok.</Button>
        <Button>Mihai are pula ok.</Button>
      </HStack>
    </VStack>
  );
}

export default function () {
  return <CardComponent />;
}

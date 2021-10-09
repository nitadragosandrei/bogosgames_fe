import React from "react";
import { NavLink } from "react-router-dom";
import { VStack, Center, HStack, Button, Heading } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Games({ navigation }) {
  return (
    <VStack alignItems="center" space={4}>
      <Heading textAlign="center" mb="10">
        BogosGames
      </Heading>
      <HStack space={4}>
          <Button>Remi</Button>
          <Button onPress={() => navigation.navigate('Presedintii')}>Presedintii</Button>
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

export default Games;

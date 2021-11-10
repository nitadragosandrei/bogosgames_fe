import React from "react";
import { NavLink } from "react-router-dom";
import { VStack, Center, HStack, Button, Heading } from "native-base";

function GamesMenu({ navigation }) {
  return (
    <VStack alignItems="center" space={4}>
      <Heading textAlign="center" mb="10">
        BogosGames
      </Heading>
      <HStack space={4}>
        <Button>Remi</Button>
        <Button
          onPress={() =>
            navigation.navigate("NumberOfPlayersSelector", {
              gameName: "Presedintii",
              min: 3,
              max: 7,
            })
          }
        >
          Presedintii
        </Button>
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

export default GamesMenu;

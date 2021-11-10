import React from "react";
import { NavLink } from "react-router-dom";
import { VStack, Center, HStack, Button, Heading } from "native-base";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function GamesMenu({ navigation }) {
  return (
    <VStack
      alignItems="center"
      space={4}
      width={windowWidth}
      height={windowHeight}
      alignSelf="center"
    >
      <Heading textAlign="center" mb="10">
        BogosGames
      </Heading>
      <Button.Group
        space="xl"
        direction="row"
        alignContent="center"
      >
        <Button flexWrap="wrap">Remi</Button>
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
      </Button.Group>
      <Button.Group space={4}>
        <Button>Dragos are pula ok.</Button>
        <Button>Relu are pula ok.</Button>
      </Button.Group>
      <HStack space={4}>
        <Button>Stefan nu are pula ok.</Button>
        <Button>Mihai are pula ok.</Button>
      </HStack>
    </VStack>
  );
}

export default GamesMenu;

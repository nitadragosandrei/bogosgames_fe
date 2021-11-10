import { Alert, Flex, Image } from "native-base";
import React from "react";
import { BackHandler, Pressable } from "react-native";
import NumberOfPlayersSelector from "./NumberOfPlayersSelector";
import NameOfPlayersSelector from "./NameOfPlayersSelector";

function Presedintii({ navigation, route }) {
  const [roundOngoing, setroundOngoing] = React.useState(true);
  const [gameOngoing, setgameOngoing] = React.useState(true);

  return (
    <Flex alignItems="center">
      {roundOngoing ? (
        <Pressable
          onPress={() => {
            setroundOngoing(false);
          }}
        >
          <Image
            size="2xl"
            resizeMode="center"
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Cards-3-Club.svg/1200px-Cards-3-Club.svg.png",
            }}
            alt={"Alternate Text " + "2xl"}
          />
        </Pressable>
      ) : (
        <h1>alege castigatorul</h1>
      )}
    </Flex>
  );
}

export default Presedintii;

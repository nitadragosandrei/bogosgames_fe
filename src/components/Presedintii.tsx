import { Alert, Flex } from "native-base";
import React from "react";
import { BackHandler } from "react-native";
import NumberOfPlayersSelector from "./NumberOfPlayersSelector";
import NameOfPlayersSelector from "./NameOfPlayersSelector";

function Presedintii({ navigation }) {
  const [gameOngoing, setGameOngoing] = React.useState(false);
  const [numberOfPlayers, setNumberOfPlayers] = React.useState(0);

  return (
    <Flex alignItems="center">
      {!gameOngoing ? (
        <NumberOfPlayersSelector
          gameName="Presedintii"
          min="3"
          max="7"
          setGameOngoing={setGameOngoing}
          setNumberOfPlayers={setNumberOfPlayers}
        />
      ) : (
        <NameOfPlayersSelector numberOfPlayers={numberOfPlayers} />
      )}
    </Flex>
  );
}

export default Presedintii;

import { Alert, Container } from "native-base";
import React from "react";
import { BackHandler } from "react-native";
import NumberOfPlayersSelector from "./NumberOfPlayersSelector";
import NameOfPlayersSelector from "./NameOfPlayersSelector";

function Presedintii({ navigation }) {
  const [gameOngoing, setGameOngoing] = React.useState(false);
  const [numberOfPlayers, setNumberOfPlayers] = React.useState(0);

  return (
    <Container>
      {!gameOngoing ? (
        <NumberOfPlayersSelector
          gameName="Presedintii"
          min="3"
          max="7"
          setGameOngoing={setGameOngoing}
          setNumberOfPlayers={setNumberOfPlayers}
        ></NumberOfPlayersSelector>
      ) : (
        <NameOfPlayersSelector
          numberOfPlayers={numberOfPlayers}
        ></NameOfPlayersSelector>
      )}
    </Container>
  );
}

export default Presedintii;

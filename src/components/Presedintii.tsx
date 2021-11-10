import { Alert, Flex } from "native-base";
import React from "react";
import { BackHandler } from "react-native";
import NumberOfPlayersSelector from "./NumberOfPlayersSelector";
import NameOfPlayersSelector from "./NameOfPlayersSelector";
import BasicGame from "./BasicGame";

function Presedintii({ navigation }) {
  const [gameOngoing, setGameOngoing] = React.useState(false);
  const [numberOfPlayersSelected, setNumberOfPlayersSelected] =
    React.useState(false);

  const [nameOfPlayers, setNameOfPlayers] = React.useState({});
  const [numberOfPlayers, setNumberOfPlayers] = React.useState(0);
  let page;
  if (!numberOfPlayersSelected) {
    page = (
      <NumberOfPlayersSelector
        gameName="Presedintii"
        min="3"
        max="7"
        setNumberOfPlayers={setNumberOfPlayers}
        setNumberOfPlayersSelected={setNumberOfPlayersSelected}
      />
    );
  } else if (numberOfPlayersSelected && !gameOngoing) {
    page = (
      <NameOfPlayersSelector
        numberOfPlayers={numberOfPlayers}
        setGameOngoing={setGameOngoing}
        // setNameOfPlayers={setNameOfPlayers}
      />
    );
  } else {
    page = <BasicGame />;
  }
  return <Flex alignItems="center">{page}</Flex>;
}

export default Presedintii;

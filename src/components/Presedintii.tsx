import { Alert } from "native-base";
import React from "react";
import { BackHandler } from "react-native";
import NumberOfPlayersSelector from "./NumberOfPlayersSelector";
import NameOfPlayersSelector from "./NameOfPlayersSelector";

function Presedintii() {
  const [gameOngoing, setGameOngoing] = React.useState(false);
  const [numberOfPlayers, setNumberOfPlayers] = React.useState(0);

  return (
    <div>
      {!gameOngoing ? (
        <NumberOfPlayersSelector
          gameName="Presedintii"
          min="3"
          max="7"
          setGameOngoing={setGameOngoing}
          setNumberOfPlayers={setNumberOfPlayers}
        ></NumberOfPlayersSelector>
      ) : (
        <h1>Dragos</h1>
      )}
    </div>
  );
}

export default Presedintii;

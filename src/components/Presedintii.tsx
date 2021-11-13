import {
  Alert,
  Button,
  Flex,
  Image,
  Modal,
  Text,
  View,
  HStack,
  Fab,
  NativeBaseProvider,
} from "native-base";
import React from "react";
import { BackHandler, Pressable } from "react-native";
import NumberOfPlayersSelector from "./NumberOfPlayersSelector";
import NameOfPlayersSelector from "./NameOfPlayersSelector";
import ScoreTable from "./ScoreTable";

function Presedintii({ navigation, route }) {
  const [playerButton, setPlayerButton] = React.useState({});
  const [roundOngoing, setroundOngoing] = React.useState(false);
  const [gameOngoing, setgameOngoing] = React.useState(true);
  const [points, setPoints] = React.useState(route.params.numberOfplayers);
  const [showModal, setShowModal] = React.useState(false);
  
   function handlePress(e) {
     setPlayerButton({
       ...playerButton,
       [e.currentTarget.id]: true,
     });
   }

  return (
    <Flex alignItems="center">
      {roundOngoing ? (
        <Button.Group direction="column" variant="outline">
          {Object.values(route.params.players).map((player, index) => (
            <Button
              nativeID={"button" + index}
              key={index}
              onPressIn={() => {
                player["score"] += points;
                setPoints(points - 1);
                if (points === 1) {
                  setroundOngoing(false);
                  setPlayerButton({});
                }
              }}
              onPress={handlePress}
              isDisabled={playerButton["button" + index] ? true : false }
            >
              {player["name"]}
            </Button>
          ))}
        </Button.Group>
      ) : (
        <Pressable
          onPress={() => {
            setroundOngoing(true);
            setPoints(route.params.numberOfplayers);
          }}
        >
          <Image
            size="2xl"
            resizeMode="center"
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Cards-3-Club.svg/1200px-Cards-3-Club.svg.png",
            }}
            alt={"Treiul de trefla"}
          />
        </Pressable>
      )}

      <Button onPress={() => setShowModal(true)}>Vezi scorul</Button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Na scor</Modal.Header>
          <Modal.Body>
            <ScoreTable players={route.params.players}></ScoreTable>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Flex>
  );
}

export default Presedintii;

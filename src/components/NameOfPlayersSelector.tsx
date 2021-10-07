import { Input, VStack } from "native-base";
import React from "react";
function NameOfPlayersSelector(props) {
  let players;

  return (
    <VStack alignItems="center" space={4}>
      {[...Array(props.numberOfPlayers).keys()].map((index) => {
        <Input variant="filled" placeholder={`${index}`} />;
      })}
    </VStack>
  );
}
export default NameOfPlayersSelector;

import { Input, VStack, Button, Heading } from "native-base";
import React from "react";
function NameOfPlayersSelector(props) {
  return (
    <VStack alignItems="center" space={4}>
      <Heading textAlign="center" mb="10">
        Insert names
      </Heading>
      {[...Array(props.numberOfPlayers).keys()].map((index) => {
        return (
          <Input
            size="xs"
            placeholder={"Insert player " + (index + 1) + " name"}
          />
        );
      })}
      <Button>Next</Button>
    </VStack>
  );
}
export default NameOfPlayersSelector;

import { Input, VStack, Button, Heading, FormControl } from "native-base";
import React from "react";
function NameOfPlayersSelector(props) {
  const [players, setPlayers] = React.useState({});

  function handleChange(e) {
    const value = e.target.value;
    setPlayers({
      ...players,
      [e.target.id]: value,
    });
  }

  return (
    <VStack alignItems="center" space={4}>
      <Heading textAlign="center" mb="10">
        Insert names
      </Heading>
      <FormControl>
        {[...Array(props.numberOfPlayers).keys()].map((index) => {
          return (
            <Input
              nativeID={"player" + index}
              size="xs"
              placeholder={"Insert player " + (index + 1) + " name"}
              onChange={handleChange}
            />
          );
        })}
      </FormControl>
      <Button
        onPress={() => {
          console.log(players);
        }}
      >
        Next
      </Button>
    </VStack>
  );
}
export default NameOfPlayersSelector;

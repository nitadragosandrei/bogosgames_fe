import { Input, VStack, Button, Heading, FormControl } from "native-base";
import React from "react";

function NameOfPlayersSelector({ navigation, route }) {
  const [nameOfPlayers, setNameOfPlayers] = React.useState({});

  function handleChange(e) {
    const value = e.target.value;
    setNameOfPlayers({
      ...nameOfPlayers,
      [e.target.id]: value,
    });
  }

  return (
    <VStack
      alignItems="center"
      space={4}
      w={{
        base: "100%",
        md: "100%",
      }}
    >
      <Heading textAlign="center" mb="10">
        Insert names
      </Heading>
      <FormControl>
        {[...Array(route.params.numberOfPlayers).keys()].map((index) => {
          return (
            <Input
              key={index}
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
          navigation.navigate(route.params.gameName, {
            nameOfPlayers,
            numberOfplayers: route.params.numberOfPlayers,
          });
        }}
      >
        Next
      </Button>
    </VStack>
  );
}
export default NameOfPlayersSelector;

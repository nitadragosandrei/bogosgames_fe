import { Input, VStack, Button, Heading, FormControl, Flex } from "native-base";
import React from "react";

function NameOfPlayersSelector({ navigation, route }) {
  const [players, setPlayers] = React.useState({});

  function handleChange(e) {
    const value = e.target.value;
    setPlayers({
      ...players,
      [e.target.id]: {
        name: value,
        score: 0,
      },
    });
  }

  return (
    <Flex alignItems="center">
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
            console.log(players);
            navigation.navigate(route.params.gameName, {
              players,
              numberOfplayers: route.params.numberOfPlayers,
            });
          }}
        >
          Next
        </Button>
      </VStack>
    </Flex>
  );
}
export default NameOfPlayersSelector;

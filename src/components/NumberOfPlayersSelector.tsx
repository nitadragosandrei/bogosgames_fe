import { usePropsWithComponentTheme } from "native-base";
import { VStack, Center, HStack, Button, Heading } from "native-base";
import React from "react";
import { chunk } from "lodash";
function NumberOfPlayersSelector(props) {
  const NumberOfPlayersOptions: Array<Array<number>> = chunk(
    Array.from(
      { length: props.max - props.min + 1 },
      (_, i) => Number(i) + Number(props.min)
    ),
    2
  );

  return (
    <div>
      <VStack alignItems="center" space={4}>
        <h1>{props.gameName}</h1>
        <Heading textAlign="center" mb="10">
          Choose the number of players
        </Heading>
        {NumberOfPlayersOptions.map((option: Array<number>, stackIndex) => (
          <HStack space={4} key={stackIndex}>
            {/* @TODO: this can be improved */}
            <Button
              onPressIn={() => {
                props.setNumberOfPlayers(option[0]);
                props.setGameOngoing(true);
              }}
            >
              {option[0]}
            </Button>
            <Button
              visibility={option.length > 1 ? "visible" : "hidden"}
              onPressIn={() => {
                props.setNumberOfPlayers(option[1]);
                props.setGameOngoing(true);
              }}
            >
              {option[1]}
            </Button>
          </HStack>
        ))}
      </VStack>
    </div>
  );
}
export default NumberOfPlayersSelector;

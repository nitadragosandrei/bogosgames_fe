import { Container, usePropsWithComponentTheme } from "native-base";
import { VStack, Center, HStack, Button, Heading } from "native-base";
import React from "react";
import { chunk } from "lodash";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function NumberOfPlayersSelector(props) {
  const NumberOfPlayersOptions: Array<Array<number>> = chunk(
    Array.from(
      { length: props.max - props.min + 1 },
      (_, i) => Number(i) + Number(props.min)
    ),
    2
  );

  return (
    <Container>
      <VStack alignItems="center" space={4}>
        <Heading>{props.gameName}</Heading>
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
              isDisabled={option.length > 1 ? false : true}
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
    </Container>
  );
}
export default NumberOfPlayersSelector;

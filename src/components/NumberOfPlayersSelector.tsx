import { Container, usePropsWithComponentTheme } from "native-base";
import {
  VStack,
  Center,
  HStack,
  Button,
  Heading,
  Text,
  Flex,
} from "native-base";
import React from "react";
import { chunk } from "lodash";

function NumberOfPlayersSelector({ navigation, route }) {
  const NumberOfPlayersOptions: Array<Array<number>> = chunk(
    Array.from(
      { length: route.params.max - route.params.min + 1 },
      (_, i) => Number(i) + Number(route.params.min)
    ),
    2
  );

  return (
    <Flex alignItems="center">
      <VStack alignItems="center" space={4}>
        <Heading>{route.params.gameName}</Heading>
        <Heading textAlign="center" mb="10">
          Choose the number of players
        </Heading>
        {NumberOfPlayersOptions.map((option: Array<number>, stackIndex) => (
          <HStack space={4} key={stackIndex}>
            {/* @TODO: this can be improved */}
            <Button
              onPressIn={() => {
                navigation.navigate("NameOfPlayersSelector", {
                  gameName: route.params.gameName,
                  numberOfPlayers: option[0],
                });
              }}
            >
              <Text>{option[0]}</Text>
            </Button>
            <Button
              isDisabled={option.length > 1 ? false : true}
              onPressIn={() => {
                navigation.navigate("NameOfPlayersSelector", {
                  gameName: route.params.gameName,
                  numberOfPlayers: option[1],
                });
              }}
            >
              <Text>{option[0] + 1}</Text>
            </Button>
          </HStack>
        ))}
      </VStack>
    </Flex>
  );
}
export default NumberOfPlayersSelector;

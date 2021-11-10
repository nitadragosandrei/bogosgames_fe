import { Box, Flex, Heading, HStack, Text, VStack } from "native-base";
import React from "react";

function ScoreTable(props) {
  return (
    <Flex alignItems="center">
      <VStack alignItems="center" space={4}>
        {Object.values(props.players).map((player, index) => (
          <HStack space={4} key={index}>
              <Text textAlign="left">{player["name"]}</Text>
              <Text textAlign="right">{player["score"]}</Text>
          </HStack>
        ))}
      </VStack>
    </Flex>
  );
}

export default ScoreTable;

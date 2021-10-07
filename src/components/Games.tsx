import React from "react";
import { NavLink } from "react-router-dom";
import { VStack, Center, HStack, Button, Heading } from "native-base";
function Games() {
  return (
    <VStack alignItems="center" space={4}>
      <Heading textAlign="center" mb="10">
        BogosGames
      </Heading>
      <HStack space={4}>
        <NavLink to="/remi" style={{ textDecoration: "none" }}>
          <Button>Remi</Button>
        </NavLink>
        <NavLink to="/presedintii" style={{ textDecoration: "none" }}>
          <Button>Presedintii</Button>
        </NavLink>
      </HStack>
      <HStack space={4}>
        <Button>Dragos are pula ok.</Button>
        <Button>Relu are pula ok.</Button>
      </HStack>
      <HStack space={4}>
        <Button>Stefan nu are pula ok.</Button>
        <Button>Mihai are pula ok.</Button>
      </HStack>
    </VStack>
  );
}

export default Games;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";

import GamesMenu from "./components/GamesMenu";
import Presedintii from "./components/Presedintii";
import NumberOfPlayersSelector from "./components/NumberOfPlayersSelector";
import NameOfPlayersSelector from "./components/NameOfPlayersSelector";

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Games">
          <Stack.Screen name="Games" component={GamesMenu} />
          <Stack.Screen
            name="NumberOfPlayersSelector"
            component={NumberOfPlayersSelector}
          />
          <Stack.Screen
            name="NameOfPlayersSelector"
            component={NameOfPlayersSelector}
          />
          <Stack.Screen name="Presedintii" component={Presedintii} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

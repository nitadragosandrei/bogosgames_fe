import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Games from "./components/Games";
import Presedintii from "./components/Presedintii";
import NumberOfPlayersSelector from "./components/NumberOfPlayersSelector";

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <Games />
    //     </Route>
    //     <Route exact path="/remi">
    //       <h1>Rummy joaca numa oamenii cu pula ok</h1>
    //     </Route>
    //     <Route exact path="/presedintii">
    //       <Presedintii />
    //     </Route>
    //   </Switch>
    // </Router>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Games">
          <Stack.Screen
            name="Games"
            component={Games}
          />
          <Stack.Screen name="Presedintii" component={Presedintii} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

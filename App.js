import React from "react";
import { StyleSheet } from "react-native";
import { NativeBaseProvider, Text, Box, extendTheme } from "native-base";
const theme = extendTheme({
  colors: {
    primary: {
      50: "#dcfffd",
      100: "#b3faf4",
      200: "#87f5eb",
      300: "#5bf1e3",
      400: "#33ecdb",
      500: "#1fd3c2",
      600: "#0ea497",
      700: "#00756c",
      800: "#004741",
      900: "#001917",
    },
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box
        flex={1}
        bg="primary.200"
        alignItems="center"
        justifyContent="center"
      >
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
    </NativeBaseProvider>
  );
}

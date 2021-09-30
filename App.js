import React from "react";
import { StyleSheet } from "react-native";
import CardComponent from "./src/Card";
import {
  NativeBaseProvider,
  Text,
  Box,
  VStack,
  Center,
  Container,
} from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <CardComponent />
    </NativeBaseProvider>
  );
}

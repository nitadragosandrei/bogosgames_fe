import "react-native-gesture-handler";

import { Assets } from "@react-navigation/elements";
import { registerRootComponent } from "expo";
import { Asset } from "expo-asset";

import Main from "./src/Main";

Asset.loadAsync(Assets);

registerRootComponent(Main);

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { setStatusBarStyle } from "expo-status-bar";
import IndexScreen from '../screens/IndexScreen'
import DetailsScreen from "../screens/DetailsScreen";


const Stack = createNativeStackNavigator();

const AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Details'>
      <Stack.Screen
        name="Index"
        component={IndexScreen}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppStack;

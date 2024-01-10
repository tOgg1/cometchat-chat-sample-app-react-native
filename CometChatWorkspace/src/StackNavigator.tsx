import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Chat } from "./Chat";

function StackNavigator() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Chat"}
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen name={"Chat"} component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;

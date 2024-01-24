import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calculator from "./.components/calculator";
import History from "./.components/history";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="calculator" component={Calculator} />
        <Stack.Screen name="history" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

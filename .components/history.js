import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, Text, View, FlatList, StyleSheet } from "react-native";

export default function History({ route, navigation }) {
  const { results } = route.params;
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 15 }}>
        Calculation history
      </Text>
      <FlatList
        data={results}
        renderItem={({ item }) => <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
});

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function Calculator({ navigation }) {
  const [firstInputValue, setFirstInputValue] = useState();
  const [secondInputValue, setSecondInputValue] = useState();
  const [results, setResults] = useState([]);

  const handleFirstInputChange = (text) => {
    setFirstInputValue(text);
  };
  const handleSecondInputChange = (text) => {
    setSecondInputValue(text);
  };

  const increment = () => {
    const result = parseInt(firstInputValue) + parseInt(secondInputValue);
    const calculation = `${firstInputValue} + ${secondInputValue} = ${result}`;
    setResults([...results, { key: calculation }]);
    setFirstInputValue("");
    setSecondInputValue("");
  };

  const decrease = () => {
    const result = parseInt(firstInputValue) - parseInt(secondInputValue);
    const calculation = `${firstInputValue} - ${secondInputValue} = ${result}`;

    setResults([...results, { key: calculation }]);
    setFirstInputValue("");
    setSecondInputValue("");
  };
  const handleEmptyPress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleEmptyPress}>
      <View style={styles.container}>
        <Text>Calculator</Text>
        <TextInput
          type="text"
          keyboardType="number-pad"
          style={styles.inputField}
          onChangeText={(text) => handleFirstInputChange(text)}
          value={firstInputValue}
        ></TextInput>
        <TextInput
          type="text"
          keyboardType="number-pad"
          style={styles.inputField}
          onChangeText={(text) => handleSecondInputChange(text)}
          value={secondInputValue}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={increment}>
            <Text style={styles.textColorWhite}>+</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={decrease}>
            <Text style={styles.textColorWhite}>-</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("history", { results: results })}
          >
            <Text style={styles.textColorWhite}>History</Text>
          </Pressable>
        </View>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputField: {
    marginTop: 10,
    borderWidth: 1,
    width: 230,
    height: 50,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    padding: 15,
    backgroundColor: "blue",
    margin: 10,
    minWidth: 50,
    alignItems: "center",
  },
  textColorWhite: {
    color: "white",
  },
});

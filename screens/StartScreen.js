import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";

import Colors from "../utils/Colors";

const StartGameScreen = ({onPickNumber}) => {
  const [enteredValue, setEnteredValue] = useState("");
  function numberInputHandler(inputText) {
    console.log(inputText);
    setEnteredValue(inputText);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
        Alert.alert("Invalid Number!", "Number has to be between 1 and 99.", [{text: "Okay", style: "destructive", onPress: () => {
            setEnteredValue("");
        }}]);
        return;
    }
    onPickNumber(chosenNumber);
  }
  return (
    <View style={styles.parentContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          inputMode="numeric"
          keyboardType="number-pad"
          value={enteredValue}
          autoCorrect={false}
          onChangeText={numberInputHandler}
          onEndEditing={confirmInputHandler}
        ></TextInput>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton title="Reset"
            onPress={
                () => {
                    setEnteredValue("");
                }
            } />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton title="Confirm" onPress={() => {
                confirmInputHandler();
            }} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    alignItems: "center",
  },
  inputContainer: {
    padding: 20,
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary500,
    borderRadius: 10,
    shadowColor: "black",
    elevation: 20,
    marginHorizontal: 20,
    // shadow properties only work on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    shadowColor: "black",
  },

  textInput: {
    height: 60,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
    borderBottomWidth: 3,
    marginVertical: 10,
    fontWeight: "bold",
    width: "50",
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
export default StartGameScreen;

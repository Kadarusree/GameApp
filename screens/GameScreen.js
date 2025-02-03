import { View, StyleSheet, Text, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function generateRandomBetween(min, max, exclude) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return randomNumber;
    }
  }

  function nextGuessHandler(direction) {
    console.log("direction", direction);
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  }
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Title>Opponents Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
          <Text>Higher or Lower</Text>
          <View>
            <PrimaryButton
              title="+"
              onPress={nextGuessHandler.bind(this, "greater")}
            />
            <PrimaryButton
              title="-"
              onPress={nextGuessHandler.bind(this, "lower")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ddb52f",
    borderRadius: 10,
    padding: 12,
  },
});

export default GameScreen;

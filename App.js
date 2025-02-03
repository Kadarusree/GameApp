import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import StartGameScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  function pickedNumberHandler(selectedNumber) {
    setUserNumber(selectedNumber);
  }

  let Screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    Screen = <GameScreen userNumber={userNumber} />;
  }
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.container}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView
          style={styles.rootScreen}
        >{Screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    flex: 1,
  },
  rootScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

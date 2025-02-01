import { View, StyleSheet, Text } from "react-native";
import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Title>Opponents Guess</Title>
        <View>

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
  title : {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ddb52f",
    borderRadius: 10,
    padding:12
  }
});

export default GameScreen;
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({ title, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer,    
        ]}
        android_ripple={{ color: "#f7287b" }}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 8,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },

  pressed: {
    opacity : 0.75


  },
});

export default PrimaryButton;

import { View, Text, StyleSheet } from "react-native";

function NumberContainer({ children }) {
  return <View style={styles.container}>
        <Text style={
            styles.number
        }>{children}</Text>
  </View>;
}

const styles = StyleSheet.create({
    container :{
        borderWidth: 1,
        borderColor: "#ddb52f",
        borderRadius: 10,
        padding:12,
        margin: 24,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",


    },

    number : {
        color: "#ddb52f",
        fontSize: 36,
        fontWeight: "bold",

    }


});
export default NumberContainer;

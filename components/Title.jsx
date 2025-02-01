import { View, Text , StyleSheet} from "react-native";
import Colors from "../utils/Colors";

const Title = ({children}) => {
  return (
    <View>
      <Text style = {
        styles.title
      } >{children}</Text>
    </View>
  );

}


const styles = StyleSheet.create({
    title : {
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.colorYellow,
        textAlign: "center",
        borderWidth: 1,
        borderColor: Colors.colorYellow ,
        borderRadius: 10,
        padding:12
    }
});
export default Title;

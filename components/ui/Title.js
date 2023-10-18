import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "aliceblue",
    textShadowColor: Colors.black500,
    // color: Colors.primary600,
    textAlign: "center",
    padding: 12,
  },
});

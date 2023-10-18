import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function Card({ children, style }) {
  return <View style={[styles.inputContainer, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginVertical: 36,
    backgroundColor: Colors.black500,
    borderRadius: 8,
    marginHorizontal: 24,
    elevation: 4, // Android Specific for shadowing,
    // The next 4 properties are used for shadowing specific to iOS
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
});

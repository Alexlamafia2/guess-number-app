import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.primary600,
    padding: 24,
    marginHorizontal: 24,
    marginVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.black500,
    // The next 4 properties are used for shadowing specific to iOS
    shadowColor: Colors.primary600,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.5,
  },
  numberText: {
    color: Colors.primary600,
    fontSize: 36,
    fontWeight: "bold",
  },
});

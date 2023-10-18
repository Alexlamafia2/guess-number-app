import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.textStyle}>#{roundNumber}</Text>
      <Text style={styles.textStyle}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary600,
    borderWidth: 1,
    borderRadius: 24,
    // The next 4 properties are used for shadowing specific to iOS
    shadowColor: Colors.primary600,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.2,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 28,
    backgroundColor: Colors.black500,
    flexDirection: "row",
    justifyContent: "space-between",

    elevation: 4,
  },
  textStyle: {
    color: "aliceblue",
  },
});

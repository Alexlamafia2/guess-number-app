import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 16,
    marginVertical: 4,
    marginHorizontal: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#ddb52f",

    paddingHorizontal: 16,
    paddingVertical: 8,
    // The next 4 properties are used for shadowing specific to iOS
    shadowColor: "#ddb52f",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    // Shadowing End
  },
  buttonText: {
    textAlign: "center",
    color: "aliceblue",
  },
  pressed: {
    opacity: 0.75,
  },
});

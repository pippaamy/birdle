import { StyleSheet, Text, View } from "react-native";

export default function Camera() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Say Cheese</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

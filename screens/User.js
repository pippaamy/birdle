import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function User() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>GAllery</Text>
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

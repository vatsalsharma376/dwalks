import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function MainApp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This in Main APP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

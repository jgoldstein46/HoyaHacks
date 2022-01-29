import React from "react";
import { StyleSheet, Touchable, TouchableWithoutFeedback } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps, RootTabScreenProps } from "../types";
import PostingsScreen from "./PostingsScreen";

export default function LoginScreen({}: RootStackScreenProps<"Login">) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <View style={styles.subContainer}>
          <Text>Student</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback style={styles.subContainer}>
        <Text>Club</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    height: "30%",
    width: "80%",
    borderWidth: 2,
    borderColor: "green",
  },
});

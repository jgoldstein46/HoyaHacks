import React from "react";
import { StyleSheet, Touchable, TouchableWithoutFeedback } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import navigation from "../navigation";
import { RootStackScreenProps, RootTabScreenProps } from "../types";
import PostingsScreen from "./PostingsScreen";
import { defaultCandidate, defaultClub } from "../util/default";

export default function LoginScreen({navigation}: RootStackScreenProps<"Login">) {
    const onStudentClicked = () => {
        navigation.navigate("Root", {model: defaultCandidate});
    };
    const onClubClicked = () => {
        navigation.navigate("ClubRoot", {model: defaultClub});
    };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onStudentClicked}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>Student</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={onClubClicked}>
      <View style={styles.subContainer}>
          <Text style={styles.title}>Club</Text>
        </View>
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
    height: "25%",
    width: "80%",
    borderWidth: 2,
    borderColor: "green",
    alignItems: "center",
    justifyContent: "center",
    margin: "5%",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },

});

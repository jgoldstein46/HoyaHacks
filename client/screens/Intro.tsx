import React from "react";
import { StyleSheet, Touchable, TouchableWithoutFeedback } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import navigation from "../navigation";
import { RootStackScreenProps, RootTabScreenProps } from "../types";
import PostingsScreen from "./PostingsScreen";

export default function Intro({navigation}: RootStackScreenProps<"Login">) {
    // const onStudentLogin = () => {
    //     navigation.navigate("Root");
    // };
    // const onClubClicked = () => {
    //     navigation.navigate("ClubRoot");
    // };
    const onStudentRegister = () => {
        navigation.navigate("StudentRegistration"); 
    }
    const goToLogin = () => {
        navigation.navigate("Login");
    }

  return (
    <View style={styles.container}>
      {/* <TouchableWithoutFeedback onPress={onStudentClicked}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>Login As a Student</Text>
        </View>
      </TouchableWithoutFeedback> */}
      {/* <TouchableWithoutFeedback onPress={onStudentClicked}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>Login as a Club</Text>
        </View>
      </TouchableWithoutFeedback> */}
      <TouchableWithoutFeedback onPress={onStudentRegister}>
      <View style={styles.subContainer}>
          <Text style={styles.title}>Register as a Student</Text>
        </View>
      </TouchableWithoutFeedback>
      {/* <TouchableWithoutFeedback onPress={onClubClicked}>
      <View style={styles.subContainer}>
          <Text style={styles.title}>Register as a Club</Text>
        </View>
      </TouchableWithoutFeedback> */}
      <TouchableWithoutFeedback onPress={goToLogin}>
      <View style={styles.subContainer}>
          <Text style={styles.title}>Go to Login Screen</Text>
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
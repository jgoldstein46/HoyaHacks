import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, TouchableWithoutFeedback } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import navigation from "../navigation";
import Navigation from "../navigation";
import { RootStackScreenProps } from "../types";

export default function ModalScreen({
  navigation,
}: RootStackScreenProps<"Modal">) {
  const logOut = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={logOut}>
        <Text style={styles.title}>Log Out</Text>
      </TouchableWithoutFeedback>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/ModalScreen.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

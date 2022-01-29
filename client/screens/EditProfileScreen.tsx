import {
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { TextInput } from "../components/Themed";
import { AsyncStorageStatic } from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps, RootTabScreenProps } from "../types";
import storage from "../models/storage";
import { useEffect } from "react";



export default function EditProfileScreen({
  route,
  navigation,
}: RootStackScreenProps<"EditProfile">) {
  let { model } = route.params;
  const onSave = async () => {
    // TODO: Make API call to save data
  };
            

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.name}>First Name: </Text>
          <TextInput
            value={model.firstName}
            style={[styles.name, styles.input]}
          />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.name}>Last Name: </Text>
          <TextInput
            value={model.lastName}
            style={[styles.name, styles.input]}
          />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.email}>Email: </Text>
          <TextInput value={model.email} style={[styles.email, styles.input]} />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.email}>Phone: </Text>
          <TextInput value={model.phone} style={[styles.phone, styles.input]} />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.email}>Resume: </Text>
          <TextInput
            value={model.resume}
            style={[styles.resume, styles.input]}
          />
        </View>
        <TouchableOpacity
          style={[
            styles.subContainer,
            { backgroundColor: "green", justifyContent: "center" },
          ]}
          onPress={onSave}
        >
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 25,
  },
  subContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderColor: "green",
    flexDirection: "row",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    //marginBottom: 10,
  },
  email: {
    fontSize: 20,
    //marginBottom: 10,
  },
  name: {
    fontSize: 20,
  },
  phone: {
    fontSize: 20,
    //marginBottom: 10,
  },
  resume: {
    fontSize: 20,
    //marginBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    width: "100%",
    color: "grey",
  },
  saveButton: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

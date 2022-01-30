import {
  Button,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { TextInput } from "../components/Themed";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps, RootTabScreenProps } from "../types";
import storage from "../models/storage";
import { useEffect } from "react";
import React from "react";
import { Formik } from "formik";
export default function AddPostingScreen({
  route,
  navigation,
}: RootStackScreenProps<"AddPosting">) {
  let { model } = route.params;
  const onSave = async () => {
    // TODO: Make API call to save data
  };

  return (
    <Formik
      initialValues={{
        postTitle: "",
        description: "",
      }}
      onSubmit={onSave}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.subContainer}>
              <Text style={styles.name}>Club Name: {model.name}</Text>
            </View>
            <View style={styles.subContainer}>
              <Text style={styles.name}>Title: </Text>
              <TextInput
                onChangeText={handleChange("postTitle")}
                onBlur={handleBlur("postTitle")}
                value={values.postTitle}
                style={[styles.name, styles.input]}
              />
            </View>

            <View style={styles.subContainer}>
              <Text style={styles.description}>Description: </Text>
              <TextInput
                style={[styles.description, styles.input]}
                onChangeText={handleChange("description")}
                onBlur={handleBlur("description")}
                value={values.description}
              />
            </View>
            <TouchableOpacity
              style={[
                styles.subContainer,
                { backgroundColor: "green", justifyContent: "center" },
              ]}
              onPress={handleSubmit as any}
            >
              <Text style={styles.addButton}>Add</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      )}
    </Formik>
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
  description: {
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
  addButton: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

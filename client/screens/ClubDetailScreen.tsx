import { useRoute } from "@react-navigation/native";
import React from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps, RootTabScreenProps } from "../types";

export default function ClubDetailScreen({
  route,
  navigation,
}: RootStackScreenProps<"ClubDetail">) {
  const { model } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{model.name}</Text>
      <Text>{model.category}</Text>
      <Text>Club ID: {model.id}</Text>
      <Text>{model.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  subContainer: {
    flex: 1,
    borderWidth: 2,
    padding: 10,
    marginTop: 20,
    borderColor: "green",
  },
});

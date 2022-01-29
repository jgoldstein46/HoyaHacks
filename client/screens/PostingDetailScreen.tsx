import { useRoute } from "@react-navigation/native";
import React from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps, RootTabScreenProps } from "../types";



export default function PostingDetailScreen ({route, navigation}: RootStackScreenProps<"PostingDetail">) {
    const { title, id, description } = route.params;
    return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>Job ID: {id}</Text>
      <Text>{description}</Text>
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
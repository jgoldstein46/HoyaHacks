import { useRoute } from "@react-navigation/native";
import React from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps, RootTabScreenProps } from "../types";

const ApplicationsSample: Application[] = [
  {
    candidateID: "1",
    resume: "resume1",
    status: "pending",
    postingID: "1",
    clubID: "1",
    date: "1/1/2020",
  },
];

export default function ViewApplicationsScreen({
  route,
  navigation,
}: RootStackScreenProps<"ViewApplications">) {
  const { model } = route.params;
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // TODO: Make API call to refresh data
    setRefreshing(false);
  }, []);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <Text style={styles.title}>{model.name}</Text>
        <Text>{model.category}</Text>
        <Text>Club ID: {model.id}</Text>
        <Text>{model.description}</Text>
      </View>
    </ScrollView>
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

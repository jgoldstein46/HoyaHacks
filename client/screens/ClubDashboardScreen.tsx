import React from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Touchable,
  TouchableWithoutFeedback,
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import PostingsScreen from "./PostingsScreen";

export default function ClubDashboardScreen({
  route,
  navigation,
}: RootTabScreenProps<"ClubDashboard">) {
  const [refreshing, setRefreshing] = React.useState(false);
  const { model } = route.params;
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // TODO: Make API call to refresh data
    setRefreshing(false);
  }, []);

  const viewApplicationsClicked = () => {
    navigation.navigate("ViewApplications", { model });
  };

  const addPostingsClicked = () => {
    navigation.navigate("AddPosting", { model });
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <TouchableWithoutFeedback onPress={addPostingsClicked}>
          <View style={styles.subContainer}>
            <Text style={styles.subTitle}>Add Postings</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={viewApplicationsClicked}>
          <View style={styles.subContainer}>
            <Text style={styles.subTitle}>View Applications</Text>
          </View>
        </TouchableWithoutFeedback>
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

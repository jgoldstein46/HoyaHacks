import { useRoute } from "@react-navigation/native";
import React from "react";
import { FlatList, RefreshControl, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps, RootTabScreenProps } from "../types";

import { sampleApplications } from "../util/default";
import { sampleCandidate } from "../util/default";

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

  const renderFlatListItem = ({ item }: { item: Application }) => {
    let candidateName = "";
    for(let i = 0; i < sampleCandidate.length; i++) {
      if(sampleCandidate[i].id === item.candidateID) {
        candidateName = sampleCandidate[i].firstName + " " + sampleCandidate[i].lastName;
      }
    }
    return (
      
      <View style={styles.flatListItem}>
        <Text style={styles.subTitle}>{candidateName}</Text>
        <Text style={styles.description}>{item.resume}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={sampleApplications}
          renderItem={renderFlatListItem}
          keyExtractor={(item) => item.applicationID}
        />
      </View>
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
  flatListItem: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderColor: "green",
  },
  description: {
    margin: 10,
    fontSize: 14,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  subContainer: {
    flex: 1,
    padding: 10,
    margin: 10,
  },
});

import React from "react";
import { FlatList, RefreshControl, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

const sample: Posting[] = [
  {
    id: "1",
    title: "Posting 1",
    description: "Description 1",
    category: "Category 1",
    status: "Status 1",
    affliation: "Affliation 1",
  },
  {
    id: "2",
    title: "Posting 2",
    description: "Description 2",
    category: "Category 2",
    status: "Status 2",
    affliation: "Affliation 2",
  },
  {
    id: "3",
    title: "Posting 3",
    description: "Description 3",
    category: "Category 3",
    status: "Status 3",
    affliation: "Affliation 3",
  },
];

export default function PostingsScreen() {
  const [refreshing, setRefreshing] = React.useState(false);
  const renderFlatListItem = ({ item }: { item: Posting }) => {
    return (
      <View style={styles.flatListItem}>
        <View style={styles.itemHeader}>
          <Text style={styles.subTitle}>{item.title}</Text>
          <Text style={styles.affliation}>{item.affliation}</Text>
        </View>

        <Text numberOfLines={3}>{item.description}</Text>
      </View>
    );
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // TODO: Make API call to refresh data
    setRefreshing(false);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Postings</Text>
      <View style={styles.subContainer}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={sample}
          renderItem={renderFlatListItem}
          keyExtractor={(item) => item.id}
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
    //borderWidth: 2,
    padding: 10,
    margin: 10,
    //borderColor: "green",
  },
  flatListItem: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderColor: "green",
  },
  affliation: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
});

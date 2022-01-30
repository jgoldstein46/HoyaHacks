import React from "react";
import { FlatList, RefreshControl, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";

import { samplePostings } from "../../util/default";

export default function NewRelease() {
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
      <Text style={styles.title}>New Release</Text>
      <View style={styles.subContainer}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={samplePostings}
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
    padding: 10,
    margin: 10,
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

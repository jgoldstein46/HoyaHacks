import React from "react";
import { FlatList, RefreshControl, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import { sampleClub } from "../../util/default";

export default function ClubsScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // TODO: Make API call to refresh data
    setRefreshing(false);
  }, []);


  const renderFlatListItem = ({ item }: { item: Club }) => {
    return (
      <View style={styles.flatListItem}>
        <Text style={styles.subTitle}>{item.name}</Text>
        <Text numberOfLines={3}>{item.description}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clubs</Text>
      <View style={styles.subContainer}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={sampleClub}
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
});

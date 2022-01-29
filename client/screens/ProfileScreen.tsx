
import React from "react";
import { FlatList, RefreshControl, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

const sample: Posting[] = [
  {
    id: "1",
    title: "First Name",
    description: "",
    category: "Category 1",
    status: "Status 1",
    affliation: "Shahryar",
  },
  {
    id: "2",
    title: "Last Name",
    description: "",
    category: "Category 2",
    status: "Status 2",
    affliation: "Valizadeh",
  },
  {
    id: "3",
    title: "Phone Number",
    description: "",
    category: "Category 3",
    status: "Status 3",
    affliation: "8001234567",
  },
  {
    id: "4",
    title: "Resume",
    description: "",
    category: "Category 3",
    status: "Status 3",
    affliation: "www.linkedin.com",
  },
];


// export default function ProfileScreen({route, navigation}:RootTabScreenProps<"Profile">) {
//   const {model} = route.params;
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{model.firstName + ' ' + model.lastName}</Text>
//       <Text style={styles.container}>{'Email: ' + model.email + '\n' 
//       + 'Phone Number: ' +model.phone + '\n'
//       + 'Resume: ' +model.resume} 
//       </Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });

export default function PostingsScreen() {
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


  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <FlatList
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
    borderWidth: 2,
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
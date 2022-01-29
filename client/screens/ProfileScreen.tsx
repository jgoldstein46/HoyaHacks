import { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps, RootTabScreenProps } from '../types';

import storage from '../models/storage';


export default function ProfileScreen({route, navigation}:RootTabScreenProps<"Profile">) {
  const {model} = route.params;

  

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
      <Text style={styles.title}>{model.firstName + " " + model.lastName}</Text>
      </View>
      <View style={styles.subContainer}>
      <Text style={styles.email}>Email: {model.email}</Text>
      </View>
      <View style={styles.subContainer}>
      <Text style={styles.phone}>Phone: {model.phone}</Text>
      </View>
      <View style={styles.subContainer}>
      <Text style={styles.resume}>Resume: {model.resume}</Text>
      </View>
    </View>
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
    width: '100%',
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderColor: "green",
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    //marginBottom: 10,
  },
  email:{
    fontSize: 20,
    //marginBottom: 10,
  },
  phone:{
    fontSize: 20,
    //marginBottom: 10,
  },
  resume:{
    fontSize: 20,
    //marginBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

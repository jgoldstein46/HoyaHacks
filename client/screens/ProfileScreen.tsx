import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps, RootTabScreenProps } from '../types';



export default function ProfileScreen({route, navigation}:RootTabScreenProps<"Profile">) {
  const {model} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{model.firstName + " " + model.lastName}</Text>
      <Text style={styles.email}>Email: {model.email}</Text>
      <Text style={styles.phone}>Phone: {model.phone}</Text>
      <Text style={styles.resume}>Resume: {model.resume}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 25,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email:{
    fontSize: 20,
    marginBottom: 10,
  },
  phone:{
    fontSize: 20,
    marginBottom: 10,
  },
  resume:{
    fontSize: 20,
    marginBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

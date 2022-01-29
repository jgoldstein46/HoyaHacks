import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps, RootTabScreenProps } from '../types';



export default function ProfileScreen({route, navigation}:RootTabScreenProps<"Profile">) {
  const {model} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{model.firstName + ' ' + model.lastName}</Text>
      <Text style={styles.container}>{'Email: ' + model.email + '\n' 
      + 'Phone Number: ' +model.phone + '\n'
      + 'Resume: ' +model.resume} 
      </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import bg from './assets/images/bg.jpeg'
export default function App() {
  return (
    <View style={styles.container}>
     
      <Image source={bg} style={styles.images}/>
      <StatusBar translucent={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  images:{
    width:'100%',
    height:'100%'
  }
});

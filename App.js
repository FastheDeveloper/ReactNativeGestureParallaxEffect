import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View,} from 'react-native';

import Paralax from '../src/components/Paralax';
import layer1 from './assets/images/Parallax/2.png'
import layer2 from './assets/images/Parallax/3.png'
import layer3 from './assets/images/Parallax/4.png'
import layer4 from './assets/images/Parallax/5.png'
export default function App() {
  
  return (
    <View style={styles.container}>
     
     {/* <Sensor /> */}
     {/* <Sensor2 image={bg}/> */}
     <Paralax layers={[layer1,layer2,layer3,layer4]}/>
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

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/home/Home';
import MainNavigation from './components/navigation/MainNavigation';
import { width_window , height_window } from './components/Dimentions/Dim1';

export default function App() {
  return (
    <View style={styles.container}>
      <MainNavigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:width_window,
    height:height_window,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

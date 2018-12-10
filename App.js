import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import HomeScreen from './src/components/screens/home-screen'
import MapScreen from './src/components/screens/map-screen'

class App extends React.Component {
  render() {
    return (
      <MyApp/>
    )
  }
}

const MyApp = DrawerNavigator ({
  Home: {
    screen: HomeScreen
  },
  Map: {
    screen: MapScreen
  }
})

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
})
import React from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/components/screens/HomeScreen'
import MapScreen from './src/components/screens/MapScreen'

class App extends React.Component {
  render() {
    return (
      <MyApp/>
    )
  }
}

const Navigator = createDrawerNavigator ({
  Home: {
    screen: HomeScreen
  },
  Map: {
    screen: MapScreen
  }
})

const MyApp = createAppContainer(Navigator)

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
})
import React from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/components/screens/HomeScreen'
import MapScreen from './src/components/screens/MapScreen'
import HomeScreenStackNavigator from './src/components/navigation/HomeScreenStackNavigator'
import MapScreenNavigator from './src/components/navigation/MapScreenNavigator'


class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    )
  }
}

const DrawerNavigator = createDrawerNavigator ({
  HomeScreen: {
    screen: HomeScreenStackNavigator
  },
  MapScreen: {
    screen: MapScreenNavigator
  }
})

const AppContainer = createAppContainer(DrawerNavigator)

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
})
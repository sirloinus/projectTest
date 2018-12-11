import React from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'

import HomeScreenStackNavigator from './src/components/navigation/HomeScreenStackNavigator'
import MapScreenStackNavigator from './src/components/navigation/MapScreenStackNavigator'


class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    )
  }
}

const DrawerNavigator = createDrawerNavigator ({
  Home: {
    screen: HomeScreenStackNavigator
  },
  Map: {
    screen: MapScreenStackNavigator
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
  drawer: {
    backgroundColor: 'rgb(183, 232, 196)'
  }
})
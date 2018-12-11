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

const DrawerNavigator = createDrawerNavigator (
  {
    Home: { screen: HomeScreenStackNavigator },
    Map: { screen: MapScreenStackNavigator }
  }, {
    drawerBackgroundColor: 'rgb(183, 232, 196)',
    drawerWidth: 250,
    contentOptions: {
      activeTintColor: '#ffffff',
      inactiveTintColor: 'rgb(92, 162, 111)',
      activeBackgroundColor: 'rgb(92, 162, 111)',
      inactiveBackgroundColor: '#ffffff',
      itemsContainerStyle: {
        marginTop: 38
      },
      itemStyle: {
        marginTop: 0
      },
      labelStyle: {
        fontSize: 14,
      }
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
  }
})
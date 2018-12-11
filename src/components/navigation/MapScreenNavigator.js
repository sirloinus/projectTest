import React from 'react'
// import { createStackNavigator } from 'react-native'
import { StackNavigator } from 'react-native'

import MapScreen from '../screens/MapScreen'
import NavigationDrawerStructure from './NavigationDrawerStructure'


const MapScreenStackNavigator = StackNavigator({
    Second: {
        screen: MapScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Map',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        })
    }
})

export default MapScreenStackNavigator
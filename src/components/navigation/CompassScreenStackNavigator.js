import React from 'react'
import { createStackNavigator } from 'react-navigation'

import CompassScreen from '../screens/CompassScreen'
import NavigationDrawerStructure from './NavigationDrawerStructure'

const MapScreenStackNavigator = createStackNavigator({
    Fourth: {
        screen: CompassScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Map',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: 'rgb(183, 232, 196)',
            },
            headerTintColor: '#fff',
        })
    }
})

export default MapScreenStackNavigator
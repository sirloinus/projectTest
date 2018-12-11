import React from 'react'
import { createStackNavigator } from 'react-navigation'

import CompassScreen from '../screens/CompassScreen'
import NavigationDrawerStructure from './NavigationDrawerStructure'

const CompassScreenStackNavigator = createStackNavigator({
    Fourth: {
        screen: CompassScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Compass',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTintColor: 'rgb(183, 232, 196)',
        })
    }
})

export default CompassScreenStackNavigator
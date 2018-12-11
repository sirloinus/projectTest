import React from 'react'
import { createStackNavigator } from 'react-navigation'

import BadgesScreen from '../screens/BadgesScreen'
import NavigationDrawerStructure from './NavigationDrawerStructure'

const BadgesScreenStackNavigator = createStackNavigator({
    Second: {
        screen: BadgesScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Badges',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTintColor: 'rgb(183, 232, 196)',
        })
    }
})

export default BadgesScreenStackNavigator
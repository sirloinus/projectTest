import React from 'react'
import { createStackNavigator } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import NavigationDrawerStructure from './NavigationDrawerStructure'

const HomeScreenStackNavigator = createStackNavigator({
    First: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTintColor: 'rgb(183, 232, 196)',
        })
    }
})

export default HomeScreenStackNavigator
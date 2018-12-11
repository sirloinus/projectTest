import React from 'react'
// import { createStackNavigator } from 'react-native'
import { StackNavigator } from 'react-native'

import HomeScreen from '../screens/HomeScreen'
import NavigationDrawerStructure from './NavigationDrawerStructure'


const HomeScreenStackNavigator = StackNavigator({
    First: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#FF9800',
            },
            headerTintColor: '#fff',
        })
    }
})

export default HomeScreenStackNavigator
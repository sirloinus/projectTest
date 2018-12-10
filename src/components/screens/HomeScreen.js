import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon, Button, Container, Header, Content, Left } from 'native-base'

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    HOME SCREEN
                </Text>
            </View>
        )
    }
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
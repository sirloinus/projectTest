import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'

class HomeScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 23}}>
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
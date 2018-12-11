import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'

class BadgesScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 23 }}>
                    BADGES SCREEN
                </Text>
            </View>
        )
    }
}

export default BadgesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'
import Compass from '../Compass';


class CompassScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Compass/>
            </View>
        )
    }
}

export default CompassScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
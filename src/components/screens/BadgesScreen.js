import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

class BadgesScreen extends React.Component {

    render() {
        return (
            <ImageBackground source={require('../../../assets/images/ehud-neuhaus-162166-unsplash.jpg')} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <Text style={{ fontSize: 23, color: 'white' }}>
                        BADGES SCREEN
                    </Text>
                </View>
            </ImageBackground >
        )
    }
}

export default BadgesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
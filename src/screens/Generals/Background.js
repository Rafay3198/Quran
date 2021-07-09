import React from 'react'
import { StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../../config/theme'

const GradientBackground = ({ theme }) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                style={{ flex: 1 }}
                colors={[colors[theme].secondary, colors[theme].secondary]}>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
})

export default GradientBackground
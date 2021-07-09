import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../config/theme'

const App = () => {
    return(
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:colors.secondary
    }
})
export default App;
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { colors } from '../../config/theme'
import HOC from '../../redux'

const App = ({onPress}) => {

    const theme = useSelector(s => s.state.theme)
    return(
        <TouchableOpacity 
        onPress={onPress}
        activeOpacity={0.8}
        style={[styles.container, {backgroundColor: colors[theme].primary}]}>
            <Text style={styles.text}>Set background</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:10,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        margin:5
    },
    text:{
        color:'white'
    }
})
export default HOC(App);
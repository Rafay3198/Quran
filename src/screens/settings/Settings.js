import React, { useState } from 'react'
import { FlatList, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { useDispatch, useSelector } from 'react-redux'
import { colors, fonts } from '../../config/theme'
import { saveTheme } from '../../helper/AsyncStorage'
import { setTheme } from '../../redux/actions/userActions'
import { ColorPicker } from 'react-native-color-picker'
import { toChangeColor } from '../../routes/main.routes'

const App = ({ componentId }) => {

    const [pageBackground, setPageBackground] = useState(0)
    const theme = useSelector(s => s.state.theme)
    const dispatch = useDispatch()
    const [darkModeEnabled, setdarkMode] = useState(theme == 'dark' ? true : false)

    const toggleDarkMode = () => {
        setdarkMode(!darkModeEnabled)
        dispatch(setTheme(darkModeEnabled ? "light" : "dark"))
        saveTheme(darkModeEnabled ? "light" : "dark")
    }

    const backgroundColors = ["white", "black", "green", "white", "black", "yellow", "blue", "red", "green", "white"]

    Navigation.mergeOptions(componentId, {
        topBar: {
            background: { color: colors[theme].primary }
        }
    })

    return (
        <View style={[styles.container, { backgroundColor: colors[theme].secondary }]}>
            <View style={[styles.darkModeContainer, { backgroundColor: colors[theme].black }]}>
                <Text style={[styles.text, { color: colors[theme].white }]}>Dark Mode</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#EAEAEA" }}
                    thumbColor={darkModeEnabled ? colors[theme].primary : colors[theme].secondary}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleDarkMode}
                    value={darkModeEnabled}
                />
            </View>
            <View>
                <Text style={[styles.sectionTitle, { color: colors[theme].white, backgroundColor: colors[theme].black }]}>Quran Page Background</Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => toChangeColor()}
                    style={[styles.darkModeContainer, { backgroundColor: colors[theme].black }]}>
                    <Text style={[styles.text, { color: colors[theme].white }]}>White</Text>
                    <View style={[styles.selectedColorView, { backgroundColor: colors.white }]} />
                </TouchableOpacity>
            </View>
            
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5
    },
    darkModeContainer: {
        padding: 15,
        margin: 2,
        borderRadius: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontFamily: fonts.SFNormal,
    },
    sectionTitle: {
        fontFamily: fonts.SFNormal,
        padding: 10,
        fontSize: 12,
        opacity: 0.5
    },
    selectedColorView: {
        padding: 10,
        borderRadius: 30,
        elevation: 5,
        borderWidth: 0.1
    }
})
export default App;
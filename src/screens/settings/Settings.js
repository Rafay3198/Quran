import React, { useState } from 'react'
import { FlatList, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { useDispatch, useSelector } from 'react-redux'
import { colors, fonts } from '../../config/theme'
import { saveTheme } from '../../helper/AsyncStorage'
import { setTheme } from '../../redux/actions/userActions'
import { ColorPicker } from 'react-native-color-picker'
import { toChangeColor, toChangeFontColor } from '../../routes/main.routes'
import Ads from '../Generals/Ads'

const App = ({ componentId }) => {

    const theme = useSelector(s => s.state.theme)
    const state = useSelector(s => s.state)
    const dispatch = useDispatch()
    const [darkModeEnabled, setdarkMode] = useState(theme == 'dark' ? true : false)

    const toggleDarkMode = () => {
        setdarkMode(!darkModeEnabled)
        dispatch(setTheme(darkModeEnabled ? "light" : "dark"))
        saveTheme(darkModeEnabled ? "light" : "dark")
    }


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
                <Text style={[styles.sectionTitle, { color: colors[theme].white, backgroundColor: colors[theme].black }]}>Quran Page Theme</Text>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => toChangeColor()}
                    style={[styles.darkModeContainer, { backgroundColor: colors[theme].black }]}>
                    <Text style={[styles.text, { color: colors[theme].white }]}>Page background</Text>
                    <View style={[styles.selectedColorView, { backgroundColor: state.QuranBackgroundColor }]} />
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => toChangeFontColor()}
                    style={[styles.darkModeContainer, { backgroundColor: colors[theme].black }]}>
                    <Text style={[styles.text, { color: colors[theme].white }]}>Font color</Text>
                    <View style={[styles.selectedColorView, { backgroundColor: state.QuranFontColor }]} />
                </TouchableOpacity>
            </View>
            <Ads/>
            
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
        borderColor:'gray',
        elevation: 5,
        borderWidth: 0.5
    }
})
export default App;
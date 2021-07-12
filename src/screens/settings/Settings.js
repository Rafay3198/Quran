import React, { useState } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { useDispatch, useSelector } from 'react-redux'
import { colors, fonts } from '../../config/theme'
import { saveTheme } from '../../helper/AsyncStorage'
import { setTheme } from '../../redux/actions/userActions'

const App = ({ componentId }) => {

    const theme = useSelector(s => s.state.theme)
    const dispatch = useDispatch()
    const [darkModeEnabled, setdarkMode] = useState(theme == 'dark'? true: false)

    const toggleDarkMode = () => {
        setdarkMode(!darkModeEnabled)
        dispatch(setTheme(darkModeEnabled? "light":"dark"))
        saveTheme(darkModeEnabled? "light":"dark")
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
            
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 2,
        paddingTop: 5
    },
    darkModeContainer: {
        padding: 15,
        margin: 0,
        borderRadius: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontFamily: fonts.SFNormal,
    }
})
export default App;
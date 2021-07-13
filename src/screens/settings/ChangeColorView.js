import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { ColorPicker, fromHsv } from 'react-native-color-picker'
import { useDispatch, useSelector } from 'react-redux'
import { colors, fonts } from '../../config/theme'
import Button from '../Generals/Button'
import { setTintColor, setBackgroundColor } from '../../redux/actions/userActions'
import { toQuranView } from '../../routes/main.routes'

const App = ({ componentId }) => {

    const theme = useSelector(s => s.state.theme)
    const dispatch = useDispatch()
    const backgroundColor = useSelector(s => s.state.QuranBackgroundColor)
    const tintColor = useSelector(s => s.state.QuranFontColor)
    const [background, setBackground] = useState({"h": 34.70472178016365, "s": 0, "v": 1})
    const [fontColor, setFontColor] = useState({"h": 34.70472178016365, "s": 0, "v": 1})

    Navigation.mergeOptions(componentId, {
        topBar: {
            background: {
                color: colors[theme].primary,
            },
            backButton: {
                color: 'white'
            }
        }
    })

    const _changeBackground = () => {
        const colorCode = fromHsv(background)
        dispatch(setBackgroundColor(colorCode))
    }


    return (
        <ScrollView>
            <View style={[styles.container, { backgroundColor: colors[theme].secondary }]}>
                <Text style={[styles.sectionTitle, { color: colors[theme].white, backgroundColor: colors[theme].black }]}>Pick background Color</Text>
                <ColorPicker
                    defaultColor={backgroundColor}
                    onColorChange = {(selectedColor) => setBackground(selectedColor)}
                    onColorSelected={color => _changeBackground()}
                    style={{ flex: 0.35, height:250 }}
                />
                <Button 
                title={'Set background color'}
                onPress = {_changeBackground}
                />
                <Text style={[styles.sectionTitle, { color: colors[theme].white, backgroundColor: colors[theme].black }]}>Preview</Text>
                <TouchableOpacity 
                onPress={() => toQuranView(3, true)}
                style={{ flex: 1, padding: 10 }}>
                    <Image
                        source={require('../../imgs/five.png')}
                        resizeMode={'center'}
                        style={{ flex: 1, height: 500, width: '100%', backgroundColor: backgroundColor, tintColor:tintColor }}
                    />
                </TouchableOpacity>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionTitle: {
        fontFamily: fonts.SFNormal,
        padding: 10,
        fontSize: 12,
    },
})
export default App;
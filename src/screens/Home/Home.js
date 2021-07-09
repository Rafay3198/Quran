import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { useSelector } from 'react-redux'
import { colors, fonts } from '../../config/theme'
import { toTabScreen } from '../../routes/main.routes'
import GradientBackground from '../Generals/Background'
import Cards from '../Generals/Cards'

const App = ({ componentId }) => {

    const imageSource = [
        require("../../imgs/quran2.png"),
        require("../../imgs/quran2.png"),
        require("../../imgs/quran2.png"),
        require("../../imgs/quran2.png")
    ]

    const theme = useSelector(s => s.state.theme)

    Navigation.mergeOptions(componentId, {
        topBar: {
            title: { fontFamily: fonts.mehr, alignment: 'center', fontSize: 21 }
        }
    });

    return (
        <View style={styles.container}>
            <GradientBackground theme={theme} />
            <Text style={[styles.title, {color: colors[theme].primary, backgroundColor: colors[theme].black}]}>القرآن الکریم</Text>
            <View style={[styles.seperator, {borderBottomColor: colors[theme].primary}]} />
            <View style={styles.cardContainer}>
                <Cards
                    theme={theme}
                    text={"Resume"}
                    imageSource={imageSource[0]}
                />
                <Cards
                    theme={theme}
                    text={"Parah"}
                    onPress={() => toTabScreen(0)}
                    imageSource={imageSource[1]}
                />
            </View>
            <View style={styles.cardContainer}>
                <Cards
                    theme={theme}
                    text={"Soorah"}
                    onPress={() => toTabScreen(1)}
                    imageSource={imageSource[2]}
                />
                <Cards
                    theme={theme}
                    text={"Bookmarks"}
                    onPress={() => {}}
                    imageSource={imageSource[3]}
                />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontFamily: fonts.mehr,
        textAlign: 'center',
        fontSize: 24,
        // fontWeight:'bold',
        padding: 10
    },
    cardContainer: {
        flexDirection: 'row'
    },
    seperator: {
        borderBottomWidth: 0.3,
        padding: 0,
        margin: 5,
        marginTop: 0
    }
})
export default App;
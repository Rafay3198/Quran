import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useNavigationButtonPress } from 'react-native-navigation-hooks/dist'
import { useSelector } from 'react-redux'
import { colors, fonts } from '../../config/theme'
import { toDescriptionImages } from '../../routes/main.routes'

const App = () => {

    useNavigationButtonPress(
        (e) => {
          toDescriptionImages()
        },
        {  buttonId: 'needToKnowRight' }
      )

    const rumooz = [
        {
            symbol: "مـ ",
            description:"The Compulsory Stop"
        },
        {
            symbol: "ط",
            description:"The Absolute Pause"
        },
        {
            symbol: "ج",
            description:"The Permissible Stop"
        },
        {
            symbol: "ز",
            description:"Continue Reading"
        },
        {
            symbol: "ص",
            description:"The Licensed Pause"
        },
        {
            symbol: "صلي",
            description:"Preference for Continuation"
        },
        {
            symbol: "ق",
            description:"Better not to Stop"
        },
        {
            symbol: "صل",
            description:"The Permissible Pause"
        },
        {
            symbol: "قف",
            description:"The Anticipation Mark"
        },
        {
            symbol: "س",
            description:"The Silence Symbol"
        },
        {
            symbol: "وقفۃ",
            description:"The Longer Pause"
        },
        {
            symbol: "لا",
            description:"No Need of Stopping"
        },
        {
            symbol: "ك",
            description:"Similar Meaning as Previous Sign"
        },
        {
            symbol: "∴",
            description:"The Embracing Stop"
        },
        {
            symbol: "وقف النبی",
            description:"The Pause of Prophet PBUH"
        },
        {
            symbol: "وقف غفران",
            description:"The Sign of Supplication"
        },
        {
            symbol: "وقف منزل",
            description:"The Pause Sign of Jibrael A.S"
        },
    ]

    const theme = useSelector(s => s.state.theme)

    const _renderItem = ({ item, index }) => {
        return (
            <View style={[styles.itemContainer, { backgroundColor: colors[theme].black }]}>
                <View style={[styles.wordContainer, { backgroundColor: index % 2 == 0 ? colors[theme].c1 : index % 3 == 0 ? colors[theme].c2 : index % 5 == 0 ? colors[theme].c3 : '#F7093A' }]}>
                    <Text adjustsFontSizeToFit style={styles.arabicWord}>{item.symbol}</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={[styles.description, { color: colors[theme].white }]}>{item.description}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={[styles.container, { backgroundColor: colors[theme].secondary }]}>
            <FlatList
                data={rumooz}
                keyExtractor={(_, i) => i.toString()}
                renderItem={_renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'row',
        // padding:5,
        elevation:5,
        margin: 5
    },
    wordContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        height: 70,
        width: 70,
    },
    arabicWord: {
        textAlign: 'center',
        color: 'white',
        fontFamily: fonts.arabicFont,
        fontSize: 26
    },
    descriptionContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10
    },
    description: {
        fontFamily: fonts.SFBold
    }
})
export default App;
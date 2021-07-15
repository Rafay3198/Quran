import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks/dist'
import { useSelector } from 'react-redux'
import { colors, fonts } from '../../config/theme'
import { toQuranView, toTabScreen, toBookmarks, showDrawer, toSettings, toNeedToKnow } from '../../routes/main.routes'
import { getLastRead } from '../../helper/AsyncStorage'
import GradientBackground from '../Generals/Background'
import Cards from '../Generals/Cards'
import Icon from 'react-native-vector-icons/Feather'

const App = ({ componentId }) => {

    const [lastRead, setLastRead] = useState(0)

    useNavigationComponentDidAppear(() => {
        getLastRead().then((index) => {
            setLastRead(parseInt(index))
        })
    }, componentId)


    const imageSource = [
        require("../../imgs/icons/resume.png"),
        require("../../imgs/icons/parah2.png"),
        require("../../imgs/icons/soorah.png"),
        require("../../imgs/icons/parah.png")
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
            <View style={[styles.headerContainer, {backgroundColor: colors[theme].black}]}>
                <Icon onPress={showDrawer} name={"align-left"} size={25} color={colors[theme].primary} />
                <Text style={[styles.title, { color: colors[theme].primary, backgroundColor: colors[theme].black }]}>القرآن الکریم</Text>
                <Icon onPress={toSettings} name={"settings"} size={20} color={colors[theme].primary} />
            </View>
            <View style={[styles.seperator, { borderBottomColor: colors[theme].primary }]} />
            <View style={styles.cardContainer}>
                <Cards
                    theme={theme}
                    onPress={() => toQuranView(lastRead)}
                    imageStyle={{ tintColor: colors[theme].c1 }}
                    text={"Resume"}
                    imageSource={imageSource[0]}
                />
                <Cards
                    theme={theme}
                    text={"Parah"}
                    imageStyle={{ tintColor: colors[theme].c2 }}
                    onPress={() => toTabScreen(0)}
                    imageSource={imageSource[1]}
                />
            </View>
            <View style={styles.cardContainer}>
                <Cards
                    theme={theme}
                    imageStyle={{ tintColor: colors[theme].c3 }}
                    text={"Soorah"}
                    onPress={() => toTabScreen(1)}
                    imageSource={imageSource[2]}
                />
                 <Cards
                    theme={theme}
                    imageStyle={{ tintColor: colors[theme].c4 }}
                    text={"Need to Know"}
                    onPress={() => toNeedToKnow()}
                    imageSource={imageSource[3]}
                /> 
                {/* <Cards
                    theme={theme}
                    imageStyle={{ tintColor: colors[theme].c4 }}
                    text={"Need to Know"}
                    onPress={() => toBookmarks()}
                    imageSource={imageSource[3]}
                /> */}
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
        // padding: 10
    },
    cardContainer: {
        flexDirection: 'row'
    },
    seperator: {
        borderBottomWidth: 0.3,
        padding: 0,
        margin: 5,
        marginTop: 0
    },
    headerContainer:{
        // flex:1
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:8
    }
})
export default App;
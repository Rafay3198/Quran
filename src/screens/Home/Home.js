import React, { useState } from 'react'
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks/dist'
import { useSelector } from 'react-redux'
import { colors, fonts } from '../../config/theme'
import { toQuranView, toTabScreen, toBookmarks, showDrawer, toSettings, toNeedToKnow, toQiblaDirection } from '../../routes/main.routes'
import { getLastRead } from '../../helper/AsyncStorage'
import GradientBackground from '../Generals/Background'
import Cards from '../Generals/Cards'
import Icon from 'react-native-vector-icons/Feather'
import { BannerAd } from '@react-native-firebase/admob';
import { adUnitId, Ad_medium_banner } from '../../config/Keys'
import Ads from '../Generals/Ads'

const App = ({ componentId }) => {

    const [lastRead, setLastRead] = useState(0)
    const [isAdShown, setIsAdShown] = useState(false)

    useNavigationComponentDidAppear(() => {
        getLastRead().then((index) => {
            setLastRead(parseInt(index))
        })
    }, componentId)


    const imageSource = [
        { image: require("../../imgs/icons/resume.png"), title: "Resume", color: 'c1' },
        { image: require("../../imgs/icons/parah2.png"), title: "Parah", color: 'c2' },
        { image: require("../../imgs/icons/soorah.png"), title: "Soorah", color: 'c3' },
        { image: require("../../imgs/icons/parah.png"), title: "Need to know", color: 'c4' },
        // {image : require("../../imgs/icons/bookmarks.png"), title: "Bookmarks", color: 'c5'}
    ]

    const theme = useSelector(s => s.state.theme)

    const _navigate = (index) => {
        if (index == 0) toQuranView(lastRead)
        if (index == 1) toTabScreen(0)
        if (index == 2) toTabScreen(1)
        if (index == 3) toNeedToKnow()
        // if (index == 4) toBookmarks()
    }

    Navigation.mergeOptions(componentId, {
        topBar: {
            title: { fontFamily: fonts.mehr, alignment: 'center', fontSize: 21 }
        }
    });

    const renderItem = ({ item, index }) => {
        return (
            <Cards
                theme={theme}
                onPress={() => _navigate(index)}
                imageStyle={{ tintColor: colors[theme][item.color] }}
                text={item.title}
                imageSource={item.image}
            />
        )
    }

    return (
        <View style={[styles.container, { backgroundColor: colors[theme].primary }]}>
            <GradientBackground theme={theme} />
            <View style={[styles.headerContainer, { backgroundColor: colors[theme].black }]}>
                <Icon
                    onPress={showDrawer}
                    name={"align-left"}
                    size={25}
                    style={{ paddingLeft: 7, paddingRight: 7 }}
                    color={colors[theme].primary} />
                <Text style={[styles.title, { color: colors[theme].primary, backgroundColor: colors[theme].black }]}>القرآن الکریم</Text>
                <Icon
                    onPress={toSettings}
                    name={"settings"}
                    size={20}
                    style={{ paddingLeft: 7, paddingRight: 8 }}
                    color={colors[theme].primary} />
            </View>
            <View style={[styles.seperator, { borderBottomColor: colors[theme].primary }]} />
            <FlatList
                data={imageSource}
                keyExtractor={(_, i) => i.toString()}
                numColumns={2}
                renderItem={renderItem}
            />
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 5 }}>
                <Ads adSize={Ad_medium_banner} />
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
    headerContainer: {
        // flex:1
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8
    }
})
export default App;
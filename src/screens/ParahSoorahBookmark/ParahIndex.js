import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { colors } from '../../config/theme'
import HOC from '../../redux'
import { toQuranView } from '../../routes/main.routes'
import { Parah } from '../../config/Parah'
import IndexCard from '../Generals/IndexCard'
import { BannerAd, BannerAdSize } from '@react-native-firebase/admob'
import { adUnitId, Ad_full_banner, Ad_medium_banner, Ad_Smart_banner } from '../../config/Keys'
import Ads from '../Generals/Ads'
import SearchBar from '../Generals/SearchBar'

const App = () => {

    const theme = useSelector(s => s.state.theme)
    const [Parahs, setParahs] = useState(Parah)

    const _renderParahList = ({ item, index }) => {
        return (
            <View style={styles.listItemContainer}>
                <IndexCard
                    index={index}
                    onPress={() => toQuranView(item.pageIndex)}
                    english={item.NameEnglish}
                    arabic={item.Parah}
                />

            </View>
        )
    }
    
    const _search = (word) => {
            const wordForSearch = word.toLowerCase()
            let results = Parah.filter( item => 
                item.NameEnglish.toLowerCase().includes(wordForSearch) || item.Parah.includes(word)
            )
            setParahs(results) //Resulted Array
        }

    return (
        <View style={[styles.container, { backgroundColor: colors[theme].secondary }]}>
            <SearchBar
                data={Parah}
                onChangeText={_search}
            />
            <FlatList
                data={Parahs}
                renderItem={_renderParahList}
                keyExtractor={(_, i) => i.toString()}
                showsVerticalScrollIndicator={false}
            />
            <Ads />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listItemContainer: {

    }
})
export default HOC(App);
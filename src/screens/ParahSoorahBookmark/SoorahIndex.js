import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { soorah } from '../../config/Soorah'
import { colors } from '../../config/theme'
import { toQuranView } from '../../routes/main.routes'
import Ads from '../Generals/Ads'
import IndexCard from '../Generals/IndexCard'
import SearchBar from '../Generals/SearchBar'

const App = () => {

    const [soorahs, setSoorahs] = useState(soorah)
    const theme = useSelector(s => s.state.theme)

    const _renderParahList = ({ item, index }) => {
        return (
            <View style={styles.listItemContainer}>
                <IndexCard
                    index={index}
                    onPress={() => toQuranView(item.pageIndex)}
                    english={item.NameEnglish}
                    arabic={item.NameArabic}
                />
            </View>
        )
    }

    const _search = (word) => {
            const wordForSearch = word.toLowerCase()
            let results = soorah.filter( item => 
                item.NameEnglish.toLowerCase().includes(wordForSearch) || item.NameArabic.includes(word)
            )
            setSoorahs(results) //Resulted Array
        }

    return (
        <View style={[styles.container, { backgroundColor: colors[theme].secondary }]}>
            <SearchBar 
                data = {soorah}
                onChangeText = {_search}

            />
            <FlatList
                data={soorahs}
                renderItem={_renderParahList}
                keyboardShouldPersistTaps={'always'}
                showsVerticalScrollIndicator={false}
                keyExtractor={(_, i) => i.toString()}
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
export default App;
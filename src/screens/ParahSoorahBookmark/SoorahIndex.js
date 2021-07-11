import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { soorah } from '../../config/Soorah'
import { colors } from '../../config/theme'
import { toQuranView } from '../../routes/main.routes'
import IndexCard from '../Generals/IndexCard'

const App = () => {

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

    return (
        <View style={[styles.container, { backgroundColor: colors[theme].secondary }]}>
            <FlatList
                data={soorah}
                renderItem={_renderParahList}
                keyExtractor={(_, i) => i.toString()}
            />
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
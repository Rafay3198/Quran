import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { colors } from '../../config/theme'
import HOC from '../../redux'
import { toQuranView } from '../../routes/main.routes'
import {Parah} from '../../config/Parah'
import IndexCard from '../Generals/IndexCard'

const App = () => {

    const theme = useSelector(s => s.state.theme)

    const _renderParahList = ({item, index}) => {
        return (
            <View style={styles.listItemContainer}>
                <IndexCard
                index={index}
                    onPress = {() => toQuranView(item.pageIndex)}
                    english={item.NameEnglish}
                    arabic={item.Parah}
                />
            </View>
        )
    }

    return (
        <View style={[styles.container, {backgroundColor: colors[theme].secondary}]}>
            <FlatList
                data={Parah}
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
export default HOC(App);
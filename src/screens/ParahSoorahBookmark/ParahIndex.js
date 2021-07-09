import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { colors } from '../../config/theme'
import HOC from '../../redux'
import { toQuranView } from '../../routes/main.routes'
import IndexCard from '../Generals/IndexCard'

const App = () => {

    const theme = useSelector(s => s.state.theme)

    const _renderParahList = () => {
        return (
            <View style={styles.listItemContainer}>
                <IndexCard
                    onPress = {() => toQuranView()}
                    english={"Sayaqool"}
                    arabic={"سیقول"}
                />
            </View>
        )
    }

    return (
        <View style={[styles.container, {backgroundColor: colors[theme].secondary}]}>
            <FlatList
                data={Array.from({ length: 20 })}
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
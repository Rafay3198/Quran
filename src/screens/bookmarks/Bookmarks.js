import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { colors } from '../../config/theme'

const App = () => {

    const theme = useSelector(s => s.state.theme)
    const [bookmarks, setBookmarks] = useState([])

    const _renderBookMarks = () => {
        
    }

    return(
        <View style={[styles.container, { backgroundColor: colors[theme].secondary }]}>
            {/* <SearchBar 
                data = {soorah}
                onChangeText = {_search}

            /> */}
            <FlatList
                data={bookmarks}
                renderItem={_renderBookMarks}
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
        flex:1,
        backgroundColor:colors.secondary
    }
})
export default App;
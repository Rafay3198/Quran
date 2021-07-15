const { Navigation } = require('react-native-navigation');
import React, { useCallback, useState } from 'react';
import { Quran } from '../../config/QuranArray'
import Page from './QuranPage';
import useStateCallback from '../../helper/useStateCallBack'
import { storeLastRead } from '../../helper/AsyncStorage';
import { colors } from '../../config/theme';
const { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Modal, Button, Dimensions } = require('react-native');

const totalItemWidth = Dimensions.get('window').width;
const totalItemHeight = Dimensions.get('window').height;
const path = '../../imgs/'

// const _renderPage = ({ item, index }) => {
//     return (
//         <View style={{ flex: 1 }}>
//             <Image style={{ flex: 1, width: totalItemWidth, height: totalItemHeight }} resizeMode='stretch' source={item} />
//         </View>
//     )
// }


const QuranView = ({ index, componentId, previewMode }) => {

    const [pageChanged, setPageChanged] = useStateCallback(true)
    // const [currentindex, setCurrentIndex] = useState(0)
    // const [topBar, setTopBar] = useStateCallback(false)

    // Navigation.mergeOptions(componentId, {
    //     statusBar: {
    //         visible: false
    //     }
    // })

    // const _showTopBar = (index) => {
    //     setCurrentIndex(index)
    //     setTopBar(!topBar, (state) => {
    //         Navigation.mergeOptions(componentId, {
    //             topBar:{
    //                 visible:state,
    //                 background:{
    //                     color: 'black'
    //                 }
    //             }
    //         })

    //     })
        
    // }

    const onViewRef = React.useRef(({ viewableItems }) => {
        setPageChanged(viewableItems[0], (e) => {
            if (e !== undefined && !previewMode) storeLastRead(e.index.toString())
        })
    })


    return (
        <View style={{ flex: 1, }}>
            <FlatList style={{ flex: 1 }}
                horizontal={true}
                keyExtractor={(item, index) => index.toString()}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 80
                }}
                showsHorizontalScrollIndicator={false}
                maximumZoomScale={20}
                alwaysBounceHorizontal
                initialNumToRender={1}
                inverted
                initialScrollIndex={index || 0}
                data={Quran}
                decelerationRate='fast'
                snapToInterval={totalItemWidth}
                bounces={true}
                getItemLayout={(data, index) => ({
                    length: totalItemWidth,
                    offset: totalItemWidth * index,
                    index,
                })}
                pagingEnabled
                renderItem={({ item, index }) =>
                    <Page 
                    item={item} 
                    index={index}
                    // onTouch = {(index) => _showTopBar(index)} 
                    pageChanged={pageChanged}
                    />}
            />
        </View>
    )
}

export default QuranView


const styles = StyleSheet.create({
    para: {

    },
    bottomtab: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        fontSize: 15,
        color: 'black',
    }
})
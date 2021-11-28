import React, { useEffect, useState } from 'react';
import { Quran } from '../../config/QuranArray'
import Page from './QuranPage';
import useStateCallback from '../../helper/useStateCallBack'
import { storeLastRead } from '../../helper/AsyncStorage';
import { hideNavigationBar, showNavigationBar } from 'react-native-navigation-bar-color';
import KeepAwake from 'react-native-keep-awake';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigationButtonPress } from 'react-native-navigation-hooks/dist';
const { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Modal, Button, Dimensions } = require('react-native');

const totalItemWidth = Dimensions.get('window').width;

const QuranView = ({ index, componentId, previewMode }) => {

    const [pageChanged, setPageChanged] = useStateCallback(true)
    const [fullScreenMode, setFullScreenMode] = useState(true)
    const [isbookmarked, setBookMarked] = useState(false)
    
    const onViewRef = React.useRef(({ viewableItems }) => {
        console.log(viewableItems)
        setPageChanged(viewableItems[0], (e) => {
            if (e !== undefined && !previewMode) storeLastRead(e.index.toString())
        })
    })

    useEffect(() => {
        hideNavigationBar()

        return () => showNavigationBar()
    }, [])


    const _onTouchPage = () => {
        setFullScreenMode(!fullScreenMode)
        fullScreenMode? showNavigationBar() : hideNavigationBar()
    }

    Promise.all([
        // Icon.getImageSource('bookmark', 20, "gray"),
        // Icon.getImageSource('bookmark-outline', 20, "gray"),
    ]).then(([bookmarked, bookmark]) => {
        Navigation.mergeOptions(componentId, {
            statusBar: {
                visible: fullScreenMode? false : true,
                backgroundColor:'white',
                animated: true,
                style:'dark'
            },
            topBar:{
                visible: false,
                // background:{
                //     color:'white',
                // },
                // elevation: 0,
                // backButton:{
                //     color:'gray'
                // },
                // rightButtons: [
                //     {
                //         id: "bookmark",
                //         icon: isbookmarked? bookmarked: bookmark,
                //         color: 'gray'
                //     },
                // ],
            }
        })
    })

    // useNavigationButtonPress(() => {
    //     setBookMarked(!isbookmarked)
    // },componentId, "bookmark")

    return (
        <View style={{ flex: 1 }}>
            <KeepAwake />
            <FlatList style={{ flex: 1 }}
                horizontal={true}
                keyExtractor={(item, index) => index.toString()}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 80
                }}
                showsHorizontalScrollIndicator={false}
                maximumZoomScale={2.0}
                alwaysBounceHorizontal
                initialNumToRender={1}
                inverted
                initialScrollIndex={index || 0}
                data={Quran}
                decelerationRate='normal'
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
                        onTouch={(index) => _onTouchPage()}
                        pageChanged={pageChanged}
                    />}
            />
        </View>
    )
}

export default QuranView
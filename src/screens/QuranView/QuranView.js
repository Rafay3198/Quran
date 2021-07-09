const { Navigation } = require('react-native-navigation');
import React, { useState } from 'react';
import { Quran } from '../../config/QuranArray'
const { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Modal, Button, Dimensions } = require('react-native');

const totalItemWidth = Dimensions.get('window').width;
const totalItemHeight = Dimensions.get('window').height;
const path = '../../imgs/'
const dummy = [
    
    require('../../imgs/six.png'),
    require('../../imgs/two.png'),
    require('../../imgs/three.png'),
    require('../../imgs/four.png'),
    require('../../imgs/five.png'),
    require('../../imgs/seven.png'),
    require('../../imgs/two_hundred_and_thirty_seven.png'),
    require('../../imgs/nine.png'),
    require('../../imgs/eighty.png'),
    require('../../imgs/eighty.png'),
    require('../../imgs/eighty_seven.png'),
    require('../../imgs/twenty_seven.png'),
    // require(path+"five.png"),

]
const _renderPage = ({ item, index }) => {
    return (
        <View style={{ flex: 1 }}>
            <Image style={{ flex: 1, width: totalItemWidth, height: totalItemHeight }} resizeMode='stretch' source={item} />
        </View>
    )
}

const QuranView = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList style={{ flex: 1 }}
                horizontal={true}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                alwaysBounceHorizontal
                inverted
                data={Quran}
                decelerationRate='fast'
                snapToInterval={totalItemWidth}
                bounces={true}
                getItemLayout={(data, index) => ({
                    length: totalItemWidth,
                    offset: totalItemWidth * index,
                    index,
                })}
                pagingEnabled={false}
                renderItem={_renderPage}
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
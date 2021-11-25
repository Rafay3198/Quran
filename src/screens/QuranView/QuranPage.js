import React, { useCallback, useEffect } from 'react';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks/dist';
import { useSelector } from 'react-redux';
import HOC from '../../redux';
const { View, Image, Dimensions } = require('react-native');

const totalItemWidth = Dimensions.get('window').width;
const totalItemHeight = Dimensions.get('window').height;

const Page = ({ item, index, onTouch }) => {

    const backgroundColor = useSelector(s => s.state.QuranBackgroundColor)
    const fontColor = useSelector(s => s.state.QuranFontColor)

    return (
        <View
            onTouchEnd={() => onTouch(index)}
            style={{ flex: 1 }}>
            <Image style={{
                flex: 1,
                width: totalItemWidth,
                height: totalItemHeight,
                tintColor: (index !== 0) && (index !== 1) && fontColor,
                backgroundColor: (index !== 0 && index !== 1) && backgroundColor
            }} resizeMode='stretch' source={item} />
        </View>
    )
}

export default HOC(Page);
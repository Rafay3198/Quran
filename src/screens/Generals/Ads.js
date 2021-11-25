import { BannerAd, BannerAdSize } from '@react-native-firebase/admob'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { adUnitId, Ad_full_banner, Ad_medium_banner } from '../../config/Keys'

const Ads = ({adSize}) => {

    const [isAdShown, setIsAdShown] = useState(true)

    return (
        <View style={styles.container}>
            {
                isAdShown &&
                <BannerAd
                unitId={adUnitId}
                size={adSize || BannerAdSize.ADAPTIVE_BANNER}
                onAdLoaded={() => setIsAdShown(true)}
                onAdOpened={() => setIsAdShown(true)}
                onAdFailedToLoad={() => setIsAdShown(false)}
            />
            }
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Ads;
import React, { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Navigation } from 'react-native-navigation'
import Ads from '../Generals/Ads'

const App = ({componentId}) => {

    const [topBar, setTopBar] = useState(false)

    Navigation.mergeOptions(componentId, {
        topBar:{
            visible: topBar,
            title:{
                text:"Need to Know"
            }
        }
    })
    return(
        <View 
        onTouchEnd = {() => setTopBar(!topBar)}
        style={styles.container}>
            <Image 
                style={{flex:1, height:'100%', width:'100%'}}
                source={require('../../imgs/icons/rumooz.jpg')}
                resizeMode={'contain'}
            />
            <Ads />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
})
export default App;
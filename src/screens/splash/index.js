import React, { useEffect } from 'react'
import { StyleSheet, View, ImageBackground, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../config/theme';
import { toHome } from '../../routes/main.routes';

const App = () => {

    useEffect(() => {
        setTimeout(() => {
            toHome()
        }, 2000);
    }, [])

    const image = require('../../imgs/logo.png');

    return (
        <View style={styles.container}>
            <Image
            source={image}
            style={styles.image}
            resizeMode={'contain'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:30,
        backgroundColor:colors.black,
        justifyContent:'center',
        alignItems:'center'
    },
    image: {
        flex: 1,
        width:'100%',
        tintColor:colors.primary,
        resizeMode:'contain'
    },
})
export default App;
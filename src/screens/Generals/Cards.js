import React from 'react'
import { StyleSheet, View, Text, Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { colors, fonts } from '../../config/theme'

const App = ({text, onPress, imageSource, theme, imageStyle}) => {
    return(
       
            <LinearGradient 
            onTouchEnd={() => onPress() || {} }
            style={styles.container}
            colors={[colors[theme].black, colors[theme].black]}>
                <Image source={imageSource || require("../../imgs/icons/resume.png")}
                style={[styles.image, imageStyle]}
                resizeMode={"contain"}
                />
                <Text style={[styles.text, {color:colors[theme].white}]}>{text}</Text>
            </LinearGradient>
            
    )
}

const styles = StyleSheet.create({
    container: {
        padding:20,
        flex:1,
        margin:3,
        borderRadius:8,
        alignItems:'center',
    },
    text:{
        paddingTop:10,
        textAlign:'center',
        fontFamily:fonts.SFNormal
    },
    image:{
        width:50,
         height:50,
         opacity:0.8
    }
})
export default App;
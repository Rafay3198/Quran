import React from 'react'
import { StyleSheet, View, Text, Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useSelector } from 'react-redux'
import { colors, fonts } from '../../config/theme'
import HOC from '../../redux'

const IndexCard = ({english, onPress, arabic}) => {

    const theme = useSelector(s => s.state.theme)
    return(
       
            <LinearGradient 
            onTouchEnd={() => onPress() || {} }
            style={[styles.container, {borderColor:colors[theme].primary}]}
            colors={[colors[theme].black, colors[theme].black]}>
                {/* <Image source={imageSource || require("../../imgs/quran2.png")}
                style={styles.image}
                resizeMode={"contain"}
                /> */}
                <Text style={[styles.text, {color:colors[theme].white}]}>{english}</Text>
                <Text style={[styles.textٓArabic, {color:colors[theme].white}]}>{arabic}</Text>
            </LinearGradient>
            
    )
}

const styles = StyleSheet.create({
    container: {
        padding:20,
        flexDirection:'row',
        elevation:5,
        justifyContent:'space-between',
        flex:1,
        borderBottomWidth:2,
        
        margin:3,
        borderRadius:5,
        alignItems:'center',
    },
    text:{
        textAlign:'center',
        fontFamily:fonts.SFNormal
    },
    textٓArabic:{
        fontFamily: fonts.arabicFont,
        fontSize:20,
    }
})
export default HOC(IndexCard);
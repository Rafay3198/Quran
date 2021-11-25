import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useSelector } from 'react-redux'
import { colors, fonts } from '../../config/theme'
import HOC from '../../redux'

const IndexCard = ({english, onPress, arabic, index}) => {

    const theme = useSelector(s => s.state.theme)
    return(
       
            <TouchableOpacity 
            activeOpacity={0.9}
            onPress={() => onPress() || {} }
            style={[styles.container, 
                // {borderColor:'red'}
                {borderColor: index%2==0? colors[theme].c1: index%3 == 0? colors[theme].c2: index%5==0? colors[theme].c3:'red', backgroundColor:colors[theme].black}
            ]}
            // colors={[colors[theme].black, colors[theme].black]}
            >
                {/* <Image source={imageSource || require("../../imgs/quran2.png")}
                style={styles.image}
                resizeMode={"contain"}
                /> */}
                <Text style={[styles.text, {color:colors[theme].white}]}>{english}</Text>
                <Text style={[styles.textٓArabic, {color:colors[theme].white}]}>{arabic}</Text>
            </TouchableOpacity>
            
    )
}

const styles = StyleSheet.create({
    container: {
        padding:10,
        flexDirection:'row',
        // elevation:2,
        justifyContent:'space-between',
        flex:1,
        borderBottomWidth:2,
        margin:5,
        borderRadius:10,
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
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { colors, fonts } from '../../config/theme'

const App = () => {

    const theme = useSelector(s => s.state.theme)
    const item = [
        {
            icon: require('../../imgs/logo.png'),
            title:"Last Read",
            color: colors[theme].c1
        },
        {
            icon: require('../../imgs/logo.png'),
            title:"Parah Index",
            color: colors[theme].c2
        },
        {
            icon: require('../../imgs/logo.png'),
            title:"Soorah Index",
            color: colors[theme].c3
        },
        {
            icon: require('../../imgs/logo.png'),
            title:"Bookmarks",
            color: colors[theme].c4
        },
        {
            icon: require('../../imgs/logo.png'),
            title:"Settings",
            color: colors[theme].c1
        },
        {
            icon: require('../../imgs/logo.png'),
            title:"Rate us",
            color: colors[theme].c2
        },

    ]

    return(
        <View style={[styles.container, {backgroundColor: colors[theme].secondary}]}>
            <View style={[styles.logoContainer, {backgroundColor: colors[theme].primary}]}>
                <Image source={require('../../imgs/logo.png')} style={{flex:1, margin:40, tintColor:'white'}} resizeMode={'contain'}/>
            </View>
            <ScrollView style={{flex:2.5}}>
                {
                    item.map((item, index) => {
                        return(
                            <View style={[styles.menuContainer, {borderColor:colors[theme].primary}]} key={index}>
                                <Image source={item.icon}  resizeMode={'contain'} style={{height:20, width:20, tintColor:item.color}}/>
                                <Text style={[styles.text, {color: colors[theme].white}]}>{item.title}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    logoContainer:{
        height:'25%',
        // flex:1,
        justifyContent:'center',
        alignItems:'center',


    },
    text:{
        fontFamily: fonts.SFNormal,
        paddingBottom:10,
        paddingLeft:10

    },
    menuContainer:{
        padding:10,
        margin:10,
        flexDirection:'row',
        marginBottom:0,
        borderBottomWidth:0.3,
    }
})
export default App;
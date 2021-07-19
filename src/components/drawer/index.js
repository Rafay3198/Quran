import React, { useState } from 'react'
import { Image, Linking, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks/dist'
import { useSelector } from 'react-redux'
import { colors, fonts } from '../../config/theme'
import { getLastRead } from '../../helper/AsyncStorage'
import { hideDrawer, toQuranView, toSettings, toTabScreen,  } from '../../routes/main.routes'

const App = ({componentId}) => {

    const [lastRead, setLastRead] = useState(0)

    useNavigationComponentDidAppear(() => {
        getLastRead().then((index) => {
            setLastRead(parseInt(index))
        })
    }, componentId)


    const theme = useSelector(s => s.state.theme)

    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'Salam! Install Quran app on your device and read it with your customized colors. \nInstall it now \n  \nhttps://play.google.com/store/apps/details?id=com.quranforummah',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {

              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

    const _navigate = (index) => {
        hideDrawer()
        if(index == 0) toQuranView(lastRead)
        if(index == 1) toTabScreen(0)
        if(index == 2) toTabScreen(1)
        if(index == 3) onShare()
        if(index == 4) toSettings()
        if(index == 5) Linking.openURL('mailto://rafaymustafa.rm@gmail.com&subject=Quran App Feedback&body=Quran App Feedback.')
        if(index == 6) Linking.openURL('https://play.google.com/store/apps/details?id=com.quranforummah')
    }
    
    const item = [
        {
            icon: require('../../imgs/icons/resume.png'),
            title:"Last Read",
            color: colors[theme].c1
        },
        {
            icon: require('../../imgs/icons/parah.png'),
            title:"Parah Index",
            color: colors[theme].c2
        },
        {
            icon: require('../../imgs/icons/soorah.png'),
            title:"Soorah Index",
            color: colors[theme].c3
        },
        {
            icon: require('../../imgs/icons/share.png'),
            title:"Share App",
            color: colors[theme].c4
        },
        {
            icon: require('../../imgs/icons/settings.png'),
            title:"Settings",
            color: colors[theme].c1
        },
        {
            icon: require('../../imgs/icons/feedback.png'),
            title:"Feedback",
            color: colors[theme].c2
        },
        {
            icon: require('../../imgs/icons/star.png'),
            title:"Rate us",
            color: colors[theme].c3
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
                            <TouchableOpacity 
                            onPress={() => _navigate(index)}
                            style={[styles.menuContainer, {borderColor:colors[theme].primary}]} key={index}>
                                <Image source={item.icon}  resizeMode={'contain'} style={{height:20, width:20, tintColor:item.color}}/>
                                <Text style={[styles.text, {color: colors[theme].white}]}>{item.title}</Text>
                            </TouchableOpacity>
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
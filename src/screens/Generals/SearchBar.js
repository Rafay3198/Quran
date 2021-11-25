import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'
import { colors } from '../../config/theme'

const SearchBar = ({
    placeholder,
    onChangeText,
}) => {

    const theme = useSelector(s => s.state.theme)

    const styles = StyleSheet.create({
        container: {
            padding:5,
            marginTop:3
        },
        inputContainer:{
            borderWidth:0.5,
            borderRadius:40,
            padding:10,
            paddingTop:0,
            paddingBottom:0,
            borderColor:'gray',
            flexDirection:'row',
            alignItems:'center',
            backgroundColor:colors[theme].black
        },
        searchIcon:{
    
        },
        input:{
            marginLeft:5,
            flex:1,
            color:'gray',
            marginRight:10,
        }
    })

    // const _search = (word) => {
    //     const wordForSearch = word.toLowerCase()
    //     let results = data.filter( item => 
    //         item.NameEnglish.toLowerCase().includes(wordForSearch) || item.NameArabic.includes(word)
    //     )
    //     searchResults(results) //Resulted Array
    // }

    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Icon
                    name={'search'}
                    size={18}
                    style={styles.searchIcon}
                    color={'gray'}
                />
                <TextInput 
                    onChangeText={onChangeText}
                    placeholder={placeholder || "Search here..."}
                    placeholderTextColor={'gray'}
                    style={styles.input}
                />
            </View>
        </View>
    )
}


export default SearchBar;
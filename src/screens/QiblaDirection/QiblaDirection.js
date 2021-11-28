// import React, { useEffect, useState } from 'react'
// import { Image, StyleSheet, View } from 'react-native'
// import { useSelector } from 'react-redux'
// import { colors } from '../../config/theme'
// import RNSimpleCompass from 'react-native-simple-compass';
// import { Navigation } from 'react-native-navigation';


// const App = ({componentId}) => {

//     const [degree, setDegree] = useState(0)

//     useEffect(() => {
//         return () => {
//             RNSimpleCompass.stop();
//         }
//     }, [])

//     const degree_update_rate = 3; // Number of degrees changed before the callback is triggered
//     RNSimpleCompass.start(degree_update_rate, (degree) => {
//         setDegree(degree);
//     });

//     const theme = useSelector(s => s.state.theme)

//     Navigation.mergeOptions(componentId, {
//         layout: {
//             orientation: ['portrait'],
//           },
//           topBar:{
//               background:{
//                   color: colors[theme].primary
//               }
//           }
//     })


//     return (
//         <View style={[styles.container, { backgroundColor: colors[theme].black }]}>
//             <Image
//                 source={require('../../imgs/icons/qibla.png')}
//                 resizeMode={'contain'}
//                 style={{tintColor: colors[theme].white, width:'90%', }}
//                 style={[
//                     styles.image,
//                     { transform: [{ rotate: `${260 - degree}deg` }] ,tintColor: colors[theme].white },
//                 ]}
//             />
//         </View>
//     )
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     image: {
//         width: '90%',
//         flex: 1,
//         alignSelf: 'center',
//     }
// })
// export default App;
import React from 'react'
import {Dimensions, Modal, View} from 'react-native';
import Spinner from "react-native-spinkit";

export const _AppSpinner= ({spinner, spinnerType})=>{
    const { width , height} = Dimensions.get('screen')
    return(
        <Modal
            transparent={true}
            visible={ spinner }>
            <View style={ {flex:1, backgroundColor:"rgba(0,0,0,0.75)", alignItems:'center', justifyContent:'center' }} >
                <View style ={ { width:width*0.6, height:height*0.35,borderRadius:width*0.05, alignItems:'center', justifyContent:'center'} } >
                    <Spinner
                        type={spinnerType?spinnerType:'ChasingDots'}
                        color={"lightgrey"}
                        size={width*0.3}
                        isVisible={spinner}/>
                </View>
            </View>
        </Modal>
    )
}


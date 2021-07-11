import {Navigation} from "react-native-navigation";
import {colors, fonts} from "../config/theme";
import Icon from 'react-native-vector-icons/Feather'
import {RNNDrawer} from "react-native-navigation-drawer-extension";

const STACK_ID = 'MAIN_STACK';


export function showDrawer() {
    RNNDrawer.showDrawer({
        component: {
            name: "side-drawer",
            options: {
                statusBar: {
                    style: 'light',
                    drawBehind: false,
                }
            },
            passProps: {
                animationOpenTime: 150,
                animationCloseTime: 100,
                direction: "left",
                dismissWhenTouchOutside: true,
                fadeOpacity: 0.6,
                drawerScreenWidth: "75%" || 445, // Use relative to screen '%' or absolute
                drawerScreenHeight: "100%" || 700,
                parentComponentId: STACK_ID, // Custom prop, will be available in your custom drawer component props
            },
        }
    });
}

export function hideDrawer() {
    RNNDrawer.dismissDrawer();
}

export function toHome(data) {
    Navigation.setStackRoot(STACK_ID, {
        component: {
            name: 'home',
            options: {
                topBar: {
                   visible:false
                },
            },passProps:{
                data: data
            }
        }
    })
}

export function toTabScreen(data) {
    Navigation.push(STACK_ID, {
        component: {
            name: 'soorah/parah',
            options: {
                topBar: {
                   visible:false
                },
            },passProps:{
                tabIndex: data
            }
        }
    })
}

export function toQuranView(data) {
    Navigation.push(STACK_ID, {
        component: {
            name: 'QuranView',
            options: {
                statusBar:{
                    visible:false
                },
                topBar: {
                   visible:false
                },
            },passProps:{
                index: data
            }
        }
    })
}

export function toSettings(data) {
    Navigation.push(STACK_ID, {
        component: {
            name: 'settings',
            options: {
                statusBar:{
                    visible:false
                },
                topBar: {
                   visible:false
                },
            },passProps:{
                data: data
            }
        }
    })
}

export function toBookmarks(data) {
    Navigation.push(STACK_ID, {
        component: {
            name: 'bookmarks',
            options: {
                statusBar:{
                    visible:false
                },
                topBar: {
                   visible:false
                },
            },passProps:{
                index: data
            }
        }
    })
}


Navigation.setDefaultOptions({
    statusBar:{
        backgroundColor:colors.black
    },
    topBar:{
        backButton:{
            color:colors.white
        },
        title:{
            color:colors.white
        },
        background:{
            color:colors.primary
        }
    }
})
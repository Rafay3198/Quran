import { Navigation } from "react-native-navigation";
import { colors, fonts } from "../config/theme";
import Icon from 'react-native-vector-icons/Feather'
import IconIonIcons from 'react-native-vector-icons/Ionicons'
import { RNNDrawer } from "react-native-navigation-drawer-extension";

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
                    visible: false
                },
            }, passProps: {
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
                    visible: false
                },
            }, passProps: {
                tabIndex: data
            }
        }
    })
}

export function toQuranView(data, previewMode) {
    
        Navigation.push(STACK_ID, {
            component: {
                name: 'QuranView',
                options: {
                    topBar: {
                        visible: false,
                    },
                }, passProps: {
                    index: data,
                    previewMode
                },
            }
        })
    }

export function toSettings(data) {
    Navigation.push(STACK_ID, {
        component: {
            name: 'settings',
            options: {
                topBar: {
                    title: {
                        text: "Settings",
                        alignment: 'center',
                        color: 'white'
                    },
                    backButton: {
                        color: 'white'
                    }
                },
            }, passProps: {
                data: data
            }
        }
    })
}

export function toDescriptionImages(data) {
    Navigation.push(STACK_ID, {
        component: {
            name: 'descriptionImages',
            options: {
                topBar: {
                    visible: false
                }
            }
        }
    })
}

export function toQiblaDirection(data) {
    Navigation.push(STACK_ID, {
        component: {
            name: 'qiblaDirection',
            options: {
                topBar: {
                    title: {
                        text: "Qibla direction",
                        color: "white"
                    },
                    backButton: {
                        color: "white"
                    }
                }
            }
        }
    })
}

export function toNeedToKnow(data) {
    Promise.all([
        Icon.getImageSource('image', 22, "white"),
    ]).then(([rightIcon]) => {
        Navigation.push(STACK_ID, {
            component: {
                name: 'needToKnow',
                options: {
                    topBar: {
                        rightButtons: [
                            {
                                id: "needToKnowRight",
                                icon: rightIcon,
                            }
                        ],
                        title: {
                            text: "Need to know",
                            color: "white"
                        },
                        backButton: {
                            color: "white"
                        },
                    },
                }, passProps: {
                    index: data
                }
            }
        })
    })

}

export function toBookmarks(data) {
    Navigation.push(STACK_ID, {
        component: {
            name: 'bookmarks',
            options: {
                topBar: {
                    title:{
                        text: "Bookmarks"
                    }
                },
            }, passProps: {
                index: data
            }
        }
    })
}

export function toChangeColor(data) {
    Navigation.push(STACK_ID, {
        component: {
            name: 'changeColorView',
            options: {
                topBar: {
                    title: {
                        text: "Background color",
                    }
                }
            }, passProps: {
                index: data
            }
        }
    })
}

export function toChangeFontColor(data) {
    Navigation.push(STACK_ID, {
        component: {
            name: 'changeFontColor',
            options: {
                topBar: {
                    title: {
                        text: "Font color",
                    }
                }
            }, passProps: {
                index: data
            }
        }
    })
}



Navigation.setDefaultOptions({
    animations: {
        setStackRoot:{
            content: {
                waitForRender: true,
                enabled: true,
                translationX: {
                    from: require('react-native').Dimensions.get('window').width,
                    to: 0,
                    duration: 300
                }
            }
        },
        push: {
            content: {
                waitForRender: true,
                enabled: true,
                translationX: {
                    from: require('react-native').Dimensions.get('window').width,
                    to: 0,
                    duration: 300
                }
            }
        },
        pop: {
            content: {
                waitForRender: true,
                enabled: true,
                translationX: {
                    from: 0,
                    to: -require('react-native').Dimensions.get('window').width,
                    duration: 300
                }
            }
        }
    },
    statusBar: {
        backgroundColor: colors.black
    },
    topBar: {
        backButton: {
            color: colors.white
        },
        title: {
            color: colors.white
        },
        background: {
            color: colors.primary
        }
    }
})
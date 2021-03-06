import {Navigation} from "react-native-navigation";
import Splash from "./src/screens/splash";
import Home from "./src/screens/Home/Home";
import TabScreen from "./src/screens/ParahSoorahBookmark/TabScreen";
import Bookmarks from "./src/screens/bookmarks/Bookmarks";
import Settings from "./src/screens/settings/Settings";
import ChangeColorView from "./src/screens/settings/ChangeColorView";
import ChangeFontColor from "./src/screens/settings/ChangeFontColor";
import NeedToKnow from "./src/screens/NeedToKnow/NeedToKnow";
import DescriptionImages from "./src/screens/NeedToKnow/DescriptionImages";
import QuranView from "./src/screens/QuranView/QuranView";
import { withNavigationProvider, NavigationProvider } from 'react-native-navigation-hooks'
import HOC from "./src/redux";
import { RNNDrawer } from "react-native-navigation-drawer-extension";
import Drawer from "./src/components/drawer";
import { colors } from "./src/config/theme";

//Auth

Navigation.registerComponent('splash', () => withNavigationProvider(HOC(Splash)));
Navigation.registerComponent('home', () => withNavigationProvider(HOC(Home)));
Navigation.registerComponent('soorah/parah', () => withNavigationProvider(HOC(TabScreen)));
Navigation.registerComponent('bookmarks', () => withNavigationProvider(HOC(Bookmarks)));
Navigation.registerComponent('QuranView', () => withNavigationProvider(HOC(QuranView)));
Navigation.registerComponent('settings', () => withNavigationProvider(HOC(Settings)));
Navigation.registerComponent("side-drawer", () => RNNDrawer.create(HOC(Drawer)));
Navigation.registerComponent('changeColorView', () => withNavigationProvider(HOC(ChangeColorView)));
Navigation.registerComponent('changeFontColor', () => withNavigationProvider(HOC(ChangeFontColor)));
Navigation.registerComponent('needToKnow', () => withNavigationProvider(HOC(NeedToKnow)));
Navigation.registerComponent('descriptionImages', () => withNavigationProvider(HOC(DescriptionImages)));
// Navigation.registerComponent('qiblaDirection', () => withNavigationProvider(HOC(QiblaDirection)));


Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                id : 'MAIN_STACK',
                children: [
                    {
                        component: {
                            name: 'splash',
                            options: {
                                topBar: {
                                    visible: 'false'
                                },
                                statusBar: {
                                    backgroundColor: 'black',
                                    style: 'light',
                                    drawBehind : true
                                },
                            }
                        }
                    }
                ]
            }
        }
    });
});

Navigation.setDefaultOptions({
    bottomTab: {
      textColor: 'black',
      selectedTextColor: 'blue',
    },
    topBar:{
        background:{
            color:colors.primary
        },
        title:{
            color:colors.white
        },
    },
  });
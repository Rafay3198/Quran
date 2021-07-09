import * as React from 'react';
import { View, useWindowDimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import ParahIndex from './ParahIndex'
import SoorahIndex from './SoorahIndex'
import { colors } from '../../config/theme';
import { useSelector } from 'react-redux';

export default function TabViewExample({ tabIndex }) {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(tabIndex);
    const [routes] = React.useState([
        { key: 'first', title: 'Parah' },
        { key: 'second', title: 'Soorah' },
    ]);

    const renderScene = SceneMap({
        first: ParahIndex,
        second: SoorahIndex,
    });

    const theme = useSelector(s => s.state.theme)

    const renderTabBar = props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: colors[theme].white, opacity:0.85,borderBottomColor: colors[theme].white }}
          style={{ backgroundColor: colors[theme].black}}
          renderLabel={({ route, focused, color }) => (
            <Text adjustsFontSizeToFit style={{ color: focused? colors[theme].primary: colors[theme].gray, margin: 8 }}>
              {route.title}
            </Text>)}
        />
      );

    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    );
}
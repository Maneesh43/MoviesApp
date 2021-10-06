import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import FirstRoute from '../Tabs/Firstroute';
import SecondRoute from '../Tabs/SecondRoute';
import ThirdRoute from '../Tabs/ThirdRoute'


 const initialLayout = { width: Dimensions.get('window').width };

const renderScene = ({ route, jumpTo }) => {
  switch (route.key) {
    case "first":
      return <FirstRoute jumpTo={jumpTo} />;
    case "second":
      return <SecondRoute jumpTo={jumpTo} />;
    case "third":
      return <ThirdRoute jumpTo={jumpTo} />;
  }
};

export default function TabViewer(props) {
const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Movies' },
    { key: 'second', title: 'Search Results' },
    {key:'third',title:'Tv shows'}
  ]);
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}

    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});
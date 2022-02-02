// Import React
import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Introduction from './Components/Introduction/Introduction';
import Statusbar from './Components/Statusbar/Statusbar';
import Scroller from './Components/Scroller/Scroller';
import FlatNest from './Components/FlatNest/FlatNest';
import NestedList from './Components/NestedList/NestedList';
import FlexBox from './Components/FlexBox/FlexBox';
import exoar from './Components/exo1/exoar'
// Structure du composant fonction classique.
const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.body}>
        {/* <Introduction monNom={'Alex'} /> */}
        {/* <Statusbar /> */}
        {/* <Scroller /> */}
        {/* <FlatNest /> */}
        {/* <NestedList /> */}
       {/* <FlexBox />*/}
       <exoar/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});

export default App;

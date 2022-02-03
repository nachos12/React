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
import Alertes from './Components/Alertes';
import InputTest from './Components/InputTest';
import Calculatrice from './Components/Calculatrice'
// Structure du composant fonction classique.
const App = () => {

  
  return (
    <View style={styles.body}>
      <View style={styles.body}>
       {/* <Introduction monNom={'Laurnet'} /> */}
        {/* <Statusbar /> */}
        {/* <Scroller /> */}
        {/* <FlatNest /> */}
        {/* <NestedList /> */}
       {/* <FlexBox />*/}
      {/* <exoar/>  */}
    
     {/* <InputTest/>*/}
     {/* <Alertes/>*/}
      <Calculatrice/>
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

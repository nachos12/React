import React from "react";

import {View, Text, StyleSheet, Image, IconButton} from 'react-native';
//icone
export const exoar = props => {
	const icone1 = require('../../img//icons8-engrenage-30');
	const icone2 = require('../../img/icons8-home-24');
	const icone3 = require('../../img/icons8-pavé-numérique-30.png');

  return (
    <View style={styles.container}>
      <Text>exercice </Text>
      <View style={styles.container}>
        <View style={styles.navbar}>
          <Image source={icone1} style={styles.icons} />
          <Image source={icone2} style={styles.icons} />
          <Image source={icone3} style={styles.icons} />
        </View>
        <View style={styles.body}>
          <View style={styles.sections}>
            <View style={styles.article}>
              <Text> un article</Text>
              <Image source={icone1} />
            </View>
          </View>
          <View style={styles.aside}>
            <Image source={icone3} style={styles.icons} />
            <Image source={icone2} style={styles.icons} />
            <Image source={icone1} style={styles.icons} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
   
  },
  body: {
    flex: 10,
    flexDirection: 'row-reverse',
  },
  sections: {
    flex: 1,
  },
  article: {
    flex: 1,
  },
  aside: {
    width: 50,
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  icons: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default exoar;
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const FlexBox = props => {
  return (
    <View style={styles.container}>
      <View style={styles.cyan}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.pink}>
        <Text>Box 2</Text>
      </View>
      <View style={styles.blue}>
        <Text>Box 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cyan: {
    // flex: 1,
    backgroundColor: '#4be3b5',
    height: 100,
    width: 100,
  },
  pink: {
    // flex: 2,
    backgroundColor: '#f551f2',
    height: 100,
    width: 100,
  },
  blue: {
    // flex: 3,
    backgroundColor: '#7e9bf2',
    height: 100,
    width: 100,
  },
});

export default FlexBox;

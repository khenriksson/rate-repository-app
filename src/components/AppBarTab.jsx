import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 150,
    backgroundColor: '#24292e',
    justifyContent: 'flex-end',
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight / 2,
  },
  // ...
});

const AppBar = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text color="textWhite" fontSize="heading" fontWeight="bold">
          Repositories
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBar;

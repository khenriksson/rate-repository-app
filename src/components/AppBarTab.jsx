import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Text from './Text';

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

import Constants from 'expo-constants';
import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ScrollView,
} from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    height: 150,
    backgroundColor: '#24292e',

    paddingBottom: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight / 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  // ...
});

const AppBar = () => {
  return (
    <>
      <View style={styles.container}>
        <ScrollView horizontal>
          <Link to="/" activeOpacity={0.8} component={TouchableWithoutFeedback}>
            <Text color="textWhite" fontSize="heading" fontWeight="bold">
              Repositories
            </Text>
          </Link>
          <Link
            to="/signin"
            activeOpacity={0.8}
            component={TouchableWithoutFeedback}
          >
            <Text color="textWhite" fontSize="heading" fontWeight="bold">
              Sign In
            </Text>
          </Link>
        </ScrollView>
      </View>
    </>
  );
};

export default AppBar;

import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textInputStyle: {
    height: 40,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
    color: 'black',
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return <NativeTextInput style={styles.textInputStyle} {...props} />;
};

export default TextInput;

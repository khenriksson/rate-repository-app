import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: '#d73a4a',
    fontSize: 20,
  },
  textInput: {
    height: 40,
    fontSize: 20,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#d73a4a',
  },
  textInputNoError: {
    height: 40,
    fontSize: 20,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    color: 'black',
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  // Check if the field is touched and the error message is present
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
        style={[styles.textInputNoError, showError && styles.textInput]}
      />
      {/* Show the error message if the value of showError variable is true  */}
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;

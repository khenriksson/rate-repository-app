import React from 'react';
import { Formik, useField } from 'formik';
import { View, TouchableWithoutFeedback } from 'react-native';
import FormikTextInput from './TextInput';

import Text from './Text';

const initialValues = {
  username: '',
  password: '',
};

const onSubmit = (values) => {
  console.log(values);
};

const SignInForm = ({ onSubmit }) => {
  const [usernameField, usernameMeta, usernameHelpers] = useField('username');
  const [passwordField, passwordMeta, passwordHelpers] = useField('password');

  return (
    <View>
      <FormikTextInput
        placeholder="Username"
        value={usernameField.value}
        onChangeText={(text) => usernameHelpers.setValue(text)}
      />
      <FormikTextInput
        placeholder="Password"
        value={passwordField.value}
        onChangeText={(text) => passwordHelpers.setValue(text)}
        secureTextEntry
      />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text style={{ color: 'black', fontSize: 20 }}>Sign In</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;

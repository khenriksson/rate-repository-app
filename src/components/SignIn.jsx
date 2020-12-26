import React from 'react';
import { Formik, useField } from 'formik';
import { View, TouchableWithoutFeedback } from 'react-native';
import FormikTextInput from './TextInput';
import * as yup from 'yup';

import Text from './Text';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Weight must be greater or equal to 1')
    .required('Weight is required'),
  password: yup
    .string()
    .min(5, 'Height must be greater or equal to 0.5')
    .required('Height is required'),
});

const onSubmit = (values) => {
  console.log(values);
};

const SignInForm = ({ onSubmit }) => {
  const [usernameField, usernameMeta, usernameHelpers] = useField('username');
  const [passwordField, passwordMeta, passwordHelpers] = useField('password');
  console.log('usernameMeta :>> ', usernameMeta);
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;

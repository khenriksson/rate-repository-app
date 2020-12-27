import React from 'react';
import { Formik } from 'formik';
import { View, TouchableWithoutFeedback } from 'react-native';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';

import Text from './Text';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must be greater or equal to 5')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be greater or equal to 5')
    .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text style={{ color: 'black', fontSize: 20 }}>Sign In</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log('Works');
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;

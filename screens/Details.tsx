import { Button, TextInput, View } from "react-native"
import React from "react";
import { Formik } from 'formik';

const Details = (props: any) => {
   return (
    <Formik
    initialValues={{ email: '', pass: '' }}
    onSubmit={values => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <TextInput
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
        <TextInput
          onChangeText={handleChange('pass')}
          onBlur={handleBlur('pass')}
          value={values.pass}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
   );
}

export default Details;
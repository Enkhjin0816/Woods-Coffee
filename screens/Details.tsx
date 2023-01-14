import { Button, Image, ScrollView, Text, TextInput, View } from "react-native"
import React from "react";
import { Formik } from 'formik';
import img1 from '../assets/img1.png';
import CustomText from "../components/text";
import Box from "../components/box";
import CheckBox from "../components/checkBox";
import sizeimg1 from '../assets/sizeIcon1.png';
import sizeimg2 from '../assets/sizeIcon2.png';
import sizeimg3 from '../assets/sizeIcon3.png';
import sizeimg4 from '../assets/sizeIcon4.png';
import sizeimg5 from '../assets/sizeIcon5.png';

const Details = (props: any) => {
   return (
    <View>
    <ScrollView>
      <Image source={img1} style={{resizeMode: 'stretch', height: 400, width: '100%'}} />
      <View style={{width: '100%', height: 1000}}>
        <CustomText ml={20} mt={20} text={'Size options'} color='black' size={24} weight={'500'} />
        <Box mt={16} height={3} width={'90%'} background={'#D3A762'} alignSelf='center' />
        <View style={{display: 'flex', flexDirection: 'row', marginTop: 30, marginLeft: 5}}>
          <CheckBox img={sizeimg1} text={'Small'} />
          <CheckBox img={sizeimg2} text={'Sprunce'} />
          <CheckBox img={sizeimg3} text={'Ceder'} />
          <CheckBox img={sizeimg4} text={'Redwood'} />
          <CheckBox img={sizeimg5} text={'Giant'} />
        </View>
      </View>
    </ScrollView>
    </View>
  //   <Formik
  //   initialValues={{ email: '', pass: '' }}
  //   onSubmit={values => console.log(values)}
  // >
  //   {({ handleChange, handleBlur, handleSubmit, values }) => (
  //     <View>
  //       <TextInput
  //         onChangeText={handleChange('email')}
  //         onBlur={handleBlur('email')}
  //         value={values.email}
  //       />
  //       <TextInput
  //         onChangeText={handleChange('pass')}
  //         onBlur={handleBlur('pass')}
  //         value={values.pass}
  //       />
  //       <Button onPress={handleSubmit} title="Submit" />
  //     </View>
  //   )}
  // </Formik>
   );
}

export default Details;
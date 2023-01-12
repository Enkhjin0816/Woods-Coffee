import React from 'react';
import { Button, Image, ScrollView, View } from 'react-native';
import { Header } from '../components/header';
import CustomText from '../components/text';
import Banner from '../components/banner';
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import coffee1 from '../assets/coffee1.png';
import coffee2 from '../assets/coffee2.png';
import coffee3 from '../assets/coffee3.png';
import coffee4 from '../assets/coffee4.png';
import coffee5 from '../assets/coffee5.png';
import coffee6 from '../assets/coffee6.png';
import NavBar from '../components/navBar';
import Card from '../components/card';

const Special = () => {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 20 }}>
      <View style={{ display: 'flex', flexDirection: 'row', marginTop: 34 }}>
        <Card name='Hot Choco' price='$3.12 / spruce' img={coffee1} />
        <Card ml={'8%'} name='Choco' price='$3.12 / spruce' img={coffee2} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', marginTop: 34 }}>
        <Card name='Toffee Nut Macchi...' price='$3.12 / spruce' img={coffee3} />
        <Card ml={'8%'} name='Choco' price='$3.12 / spruce' img={coffee4} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', marginTop: 34 }}>
        <Card name='Hot Choco' price='$3.12 / spruce' img={coffee5} />
        <Card ml={'8%'} name='Iced Pineapple Ma..' price='$3.12 / spruce' img={coffee6} />
      </View>
    </View>
  )
}

const favourite = [
  { name: 'Hot Chocolate', price: '$3.12 / spruce', img: img1 },
  { name: 'Lemonade', price: '$1.25 / lemon', img: img2, ml: 12 },
  { name: 'Cappucino', price: '$3.12 / spruce', img: img3, ml: 12, mr: 12 }
]

const seasonal = [
  { name: 'Lemonade', price: '$3.12 / lemon', img: img2 },
  { name: 'Fruit', price: '$4.28 / apple', img: img4, ml: 12 },
  { name: 'Cappucino', price: '$3.12 / spruce', img: img3, ml: 12, mr: 12 }
]

export const HomeScreen = () => {
  return (
    <View>
      <Header />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Image style={{ resizeMode: 'stretch', width: 350, height: 210, marginTop: 30, marginLeft: 20 }} source={require('../assets/banner.png')} />
        <CustomText mt={20} ml={20} weight={'500'} color={'black'} size={20} text={'Your Favourite'} />
        <Banner data={favourite} ml={20} mt={20} />
        <CustomText mt={20} ml={20} weight={'500'} color={'black'} size={20} text={'Seasonal drinks'} />
        <Banner data={seasonal} ml={20} mt={20} />
        <NavBar mt={30} special={Special} hot={Special} cold={Special} food={Special} blended={Special} />
        <CustomText mb={200} />
      </ScrollView>
    </View>
  );
}
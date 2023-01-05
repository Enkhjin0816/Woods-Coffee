import { Image, Text, View } from 'react-native';
import Box from '../components/box';
import { Header } from '../components/header';
import CustomText from '../components/text';
import Banner from '../components/banner';

const favourite = [
  {name: 'Hot Chocolate', price: '$3.12 / spruce'},
  {name: 'Lemonade', price: '$1.25 / lemon'},
  {name: 'Cappucino', price: '$3.12 / spruce'}
]

export const HomeScreen = () => {
  return (
    <View>
      <Header/>
      <Image style={{resizeMode: 'stretch', width: 350, height: 210, marginTop: 30, marginLeft: 20}} source={require('../assets/banner.png')} />
      <CustomText mt={20} ml={20} weight={'500'} color={'black'} size={20} text={'Your Favourite'}></CustomText>
      <Banner ml={20} mt={20}/>
    </View>
  );
}
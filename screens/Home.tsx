import { Image, ScrollView, Text, View } from 'react-native';
import Box from '../components/box';
import { Header } from '../components/header';
import CustomText from '../components/text';
import Banner from '../components/banner';
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import NavBar from '../components/navBar';

const favourite = [
  {name: 'Hot Chocolate', price: '$3.12 / spruce', img: img1},
  {name: 'Lemonade', price: '$1.25 / lemon', img: img2, ml: 12},
  {name: 'Cappucino', price: '$3.12 / spruce', img: img3, ml: 12, mr: 12}
]

const seasonal = [
  {name: 'Lemonade', price: '$3.12 / lemon', img: img2},
  {name: 'Fruit', price: '$4.28 / apple', img: img4, ml: 12},
  {name: 'Cappucino', price: '$3.12 / spruce', img: img3, ml: 12, mr: 12}
]

export const HomeScreen = () => {
  return (
    <View>
      <Header/>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Image style={{resizeMode: 'stretch', width: 350, height: 210, marginTop: 30, marginLeft: 20}} source={require('../assets/banner.png')} />
        <CustomText mt={20} ml={20} weight={'500'} color={'black'} size={20} text={'Your Favourite'} />
        <Banner data={favourite} ml={20} mt={20}/>
        <CustomText mt={20} ml={20} weight={'500'} color={'black'} size={20} text={'Seasonal drinks'} />
        <Banner data={seasonal} ml={20} mt={20}/>
        <NavBar/>
        <CustomText mb={200} />
      </ScrollView>
    </View>
  );
}
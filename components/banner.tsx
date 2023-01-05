import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Image } from "react-native";
import CustomText from "./text";
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const Group = ({name, price, img, ml, mr}: any) => {
    return(
            <TouchableOpacity style={{display: 'flex', alignItems: 'flex-start', marginLeft: ml, marginRight: mr}}>
                <Image source={img} style={{resizeMode: 'stretch', width: 160, height: 185, borderRadius: 5}} />
                <CustomText mt={12} text={name} size={16} weight={'500'} color={'black'}></CustomText>
                <CustomText mt={5} text={price} size={13} weight={'300'} color={'black'}></CustomText>
            </TouchableOpacity>
    )
}

const Banner = ({ml, mr, mt}: any) => {
    return(
        <ScrollView style={{marginLeft: ml, marginRight: mr, marginTop: mt}} horizontal={true} showsHorizontalScrollIndicator={false}>
            <Group name={'Hot Chocolate'} price={'$3.12 / spruce'} img={img1} />
            <Group ml={12} name={'Hot Chocolate'} price={'$3.12 / spruce'} img={img2} />
            <Group ml={12} mr={12} name={'Hot Chocolate'} price={'$3.12 / spruce'} img={img3} />
        </ScrollView>
    )
}
 export default Banner;
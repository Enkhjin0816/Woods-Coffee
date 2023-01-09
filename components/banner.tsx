import React from "react";
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

const Banner = ({ml, mr, mt, mb, data}: any) => {
    return(
        <ScrollView style={{marginBottom: mb, marginLeft: ml, marginRight: mr, marginTop: mt}} horizontal={true} showsHorizontalScrollIndicator={false}>
            {data.map((product: any) => (
                <Group ml={product.ml} mr={product.mr} name={product.name} price={product.price} img={product.img} />
            ))}
        </ScrollView>
    )
}
 export default Banner;
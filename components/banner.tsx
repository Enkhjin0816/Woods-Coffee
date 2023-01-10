import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Image } from "react-native";
import CustomText from "./text";
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import Card from "./card";

const Banner = ({ml, mr, mt, mb, data}: any) => {
    return(
        <ScrollView style={{marginBottom: mb, marginLeft: ml, marginRight: mr, marginTop: mt}} horizontal={true} showsHorizontalScrollIndicator={false}>
            {data.map((product: any) => (
                <Card ml={product.ml} mr={product.mr} name={product.name} price={product.price} img={product.img} />
            ))}
        </ScrollView>
    )
}
 export default Banner;
import React from "react";
import { ScrollView } from "react-native"
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
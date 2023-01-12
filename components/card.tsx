import React from "react"
import { TouchableOpacity, Image, View } from "react-native"
import CustomText from "./text"
import { useNavigation } from '@react-navigation/native';

const Card = ({ name, price, img, ml, mr}: any) => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity style={{ display: 'flex', alignItems: 'flex-start', marginLeft: ml, marginRight: mr }} onPress={() =>navigation.navigate('Details')}>
                <Image source={img} style={{ resizeMode: 'stretch', width: 160, height: 185, borderRadius: 5 }} />
                <CustomText mt={12} text={name} size={16} weight={'500'} color={'black'}></CustomText>
                <CustomText mt={5} text={price} size={13} weight={'300'} color={'black'}></CustomText>
            </TouchableOpacity>
        </View>
    )
}

export default Card;
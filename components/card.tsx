import { TouchableOpacity, Image } from "react-native"
import CustomText from "./text"

const Card = ({name, price, img, ml, mr}: any) => {
    return(
            <TouchableOpacity style={{display: 'flex', alignItems: 'flex-start', marginLeft: ml, marginRight: mr}}>
                <Image source={img} style={{resizeMode: 'stretch', width: 160, height: 185, borderRadius: 5}} />
                <CustomText mt={12} text={name} size={16} weight={'500'} color={'black'}></CustomText>
                <CustomText mt={5} text={price} size={13} weight={'300'} color={'black'}></CustomText>
            </TouchableOpacity>
    )
}

export default Card;
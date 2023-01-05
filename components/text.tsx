import React from "react"
import { Text } from "react-native"

const CustomText = ({color, size, weight, mt, ml, mr, mb, text}: any) => {
    return(
        <Text style={{ color: color, fontSize: size, fontWeight: weight, marginTop: mt, marginLeft: ml, marginRight: mr, marginBottom: mb}}>{text}</Text>
    )
}

export default CustomText;
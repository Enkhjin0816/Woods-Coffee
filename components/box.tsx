import React from "react"
import { View } from "react-native"

const Box = ({flex, height, width, background, borderWidth, borderColor, display, jutify, align, mt, mb, ml, mr, direction}: any) => {
    return(
        <View style={{ flex: flex, height: height, width: width, backgroundColor: background, borderColor: borderColor, borderWidth: borderWidth, display: display, justifyContent: jutify, alignItems: align, marginTop: mt, marginLeft: ml, marginRight: mr, marginBottom: mb, flexDirection: direction}}/>
    )
}

export default Box;
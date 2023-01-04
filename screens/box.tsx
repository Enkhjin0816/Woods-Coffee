import React from "react"
import { View } from "react-native"

export default function Box ({height, width, background, borderWidth, borderColor, display, jutify, align}: any) {
    return(
        <View style={{height: height, width: width, backgroundColor: background, borderColor: borderColor, borderWidth: borderWidth, display: display, justifyContent: jutify, alignItems: align, }}></View>
    )
}
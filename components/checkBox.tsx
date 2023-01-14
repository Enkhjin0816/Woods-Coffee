import React, { useState } from "react"
import { Image, TouchableOpacity, View } from "react-native"
import styled from 'styled-components';
import CustomText from "./text";

const Container = styled(View)`
	height: 80px;
	width: 80px;
	background: ${props => props.Active ? '#F5EBDA' : 'transparent'};
	border: ${props => props.Active ? '4px solid #D3A762' : 'none'};
	border-radius: 50px;
	display: flex;
	alignItems: center;
	justify-contents: center;
`

const CheckBox = ({img, text}:any) => {
	const [stat, setStat] = useState(false);
	return (
		<TouchableOpacity onPress={() => {setStat(!stat)}}>
			<Container Active={stat}>
				<Image style={{ width: 50, height: 50, resizeMode: 'cover', top: 12 }} source={img} />
			</Container>
			<CustomText alignSelf='center' color={'black'} weight={stat ? '500' : '300'} size={16} text={text} />
		</TouchableOpacity>
	)
}

export default CheckBox;
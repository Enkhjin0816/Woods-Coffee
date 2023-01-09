const Special = () => {
	return (
		<View style={{height: 400, width: 400, backgroundColor: 'black'}}>
			<Text>Special</Text>
		</View>
	)
}
const Hot = () => {
	return (
		<View><Text>Hot</Text></View>
	)
}
const Cold = () => {
	return (
		<View><Text>Cold</Text></View>
	)
}

const Food = () => {
	return (
		<View><Text>Food</Text></View>
	)
}

const Blend = () => {
	return (
		<View><Text>Blend</Text></View>
	)
}

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const NavBar = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Special" component={Special} options={{
				tabBarLabel: ({ focused }: any) => (
					<Text style={{ color: focused ? '#D3A762' : 'black', fontSize: 16 }}>Special</Text>
				),
				tabBarStyle: { backgroundColor: 'transparent', shadowColor: 'transparent'},
				tabBarIndicatorStyle: {
					backgroundColor: '#D3A762'
				},
				tabBarItemStyle: {width: 82}
			}}
			/>
			<Tab.Screen name="Hot" component={Hot} options={{
				tabBarLabel: ({ focused }: any) => (
					<Text style={{ color: focused ? '#D3A762' : 'black', fontSize: 16 }}>Hot</Text>
				),
				tabBarStyle: { backgroundColor: 'transparent', shadowColor: 'transparent'},
				tabBarIndicatorStyle: {
					backgroundColor: '#D3A762'
				},
				tabBarItemStyle: {width: 82}
			}}
			/>
			<Tab.Screen name="Cold" component={Cold} options={{
				tabBarLabel: ({ focused }: any) => (
					<Text style={{ color: focused ? '#D3A762' : 'black', fontSize: 16 }}>Cold</Text>
				),
				tabBarStyle: { backgroundColor: 'transparent', shadowColor: 'transparent'},
				tabBarIndicatorStyle: {
					backgroundColor: '#D3A762'
				},
				tabBarItemStyle: {width: 82}
			}}
			/>
			<Tab.Screen name="Food" component={Food} options={{
				tabBarLabel: ({ focused }: any) => (
					<Text style={{ color: focused ? '#D3A762' : 'black', fontSize: 16 }}>Food</Text>
				),
				tabBarStyle: { backgroundColor: 'transparent', shadowColor: 'transparent'},
				tabBarIndicatorStyle: {
					backgroundColor: '#D3A762'
				},
				tabBarItemStyle: {width: 82}
			}}
			/>
			<Tab.Screen name="Blend" component={Blend} options={{
				tabBarLabel: ({ focused }: any) => (
					<Text style={{ color: focused ? '#D3A762' : 'black', fontSize: 16 }}>Blender</Text>
				),
				tabBarStyle: { backgroundColor: 'transparent', shadowColor: 'transparent'},
				tabBarIndicatorStyle: {
					backgroundColor: '#D3A762'
				},
				tabBarItemStyle: {width: 82}
			}}
			/>
		</Tab.Navigator>
	);
}

export default NavBar;
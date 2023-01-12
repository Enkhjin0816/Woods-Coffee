import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const NavBar = ({special, hot, cold, food, blended, mt}: any) => {
	return (
		<View style={{height: 900, marginTop: mt}}>
			<Tab.Navigator>
				<Tab.Screen name="Special" component={special} options={{
					tabBarLabel: ({ focused }: any) => (
						<Text style={{ color: focused ? '#D3A762' : 'black', fontSize: 16 }}>Special</Text>
					),
					tabBarStyle: { backgroundColor: 'transparent', shadowColor: 'transparent' },
					tabBarIndicatorStyle: {
						backgroundColor: '#D3A762'
					},

				}}
				/>
				<Tab.Screen name="Hot" component={hot} options={{
					tabBarLabel: ({ focused }: any) => (
						<Text style={{ color: focused ? '#D3A762' : 'black', fontSize: 16 }}>Hot</Text>
					),
					tabBarStyle: { backgroundColor: 'transparent', shadowColor: 'transparent' },
					tabBarIndicatorStyle: {
						backgroundColor: '#D3A762'
					},

				}}
				/>
				<Tab.Screen name="Cold" component={cold} options={{
					tabBarLabel: ({ focused }: any) => (
						<Text style={{ color: focused ? '#D3A762' : 'black', fontSize: 16 }}>Cold</Text>
					),
					tabBarStyle: { backgroundColor: 'transparent', shadowColor: 'transparent' },
					tabBarIndicatorStyle: {
						backgroundColor: '#D3A762'
					},

				}}
				/>
				<Tab.Screen name="Food" component={food} options={{
					tabBarLabel: ({ focused }: any) => (
						<Text style={{ color: focused ? '#D3A762' : 'black', fontSize: 16 }}>Food</Text>
					),
					tabBarStyle: { backgroundColor: 'transparent', shadowColor: 'transparent' },
					tabBarIndicatorStyle: {
						backgroundColor: '#D3A762'
					},

				}}
				/>
				<Tab.Screen name="Blended" component={blended} options={{
					tabBarLabel: ({ focused }: any) => (
						<Text style={{ color: focused ? '#D3A762' : 'black', fontSize: 16 }}>Blended</Text>
					),
					tabBarStyle: { backgroundColor: 'transparent', shadowColor: 'transparent' },
					tabBarIndicatorStyle: {
						backgroundColor: '#D3A762'
					},

				}}
				/>
			</Tab.Navigator>
		</View>
	);
}

export default NavBar;
import React from "react";
import Navigator from "./Navigator";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from "./screens/Details";

const Stack = createNativeStackNavigator();


export default function App () {
    return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Nav" component={Navigator} options={{headerShown: false}} />
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Homeicon, Profileicon, Ordericon, Scanicon } from './assets/icons';
import { HomeScreen } from './screens/Home';
import { ScanScreen } from './screens/Scan';
import { OrderScreen } from './screens/Order';
import { ProfileScreen } from './screens/Profile';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} options={{
          tabBarLabel: ({ focused }: any) => (
            <Text style={{ color: focused ? '#D3A762' : '#838383', fontSize: 10 }}>Home</Text>
          ),
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Homeicon color={focused ? '#D3A762' : '#838383'} width={24} height={24} />
          ),
        }}
        />
        <Tab.Screen name='Scan' component={ScanScreen} options={{
          tabBarLabel: ({ focused }: any) => (
            <Text style={{ color: focused ? '#D3A762' : '#838383', fontSize: 10 }}>Scan</Text>
          ),
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Scanicon color={focused ? '#D3A762' : '#838383'} width={24} height={24} />
          ),
        }}
        />
        <Tab.Screen name='Order' component={OrderScreen} options={{
          tabBarLabel: ({ focused }: any) => (
            <Text style={{ color: focused ? '#D3A762' : '#838383', fontSize: 10 }}>Order</Text>
          ),
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ordericon color={focused ? '#D3A762' : '#838383'} width={24} height={24} />
          ),
        }}
        />
        <Tab.Screen name='Profile' component={ProfileScreen} options={{
          tabBarLabel: ({ focused }: any) => (
            <Text style={{ color: focused ? '#D3A762' : '#838383', fontSize: 10 }}>Profile</Text>
          ),
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Profileicon color={focused ? '#D3A762' : '#838383'} width={24} height={24} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
import { View, Text, Image } from 'react-native';
import { Bagicon } from '../assets/icons';
import Box from './box';

export const Header = () => {
  return (
    <View>
      <Box height={80} >
      </Box>
      <Image style={{resizeMode: 'stretch', width: 200, height: 30, position: 'absolute', marginTop: 30, marginLeft: 100}} source={require('../assets/logo.png')} />
      <View style={{position: 'absolute', marginTop: 33, marginLeft: 350}}><Bagicon color={'black'} height={25} width={25} /></View>
    </View>
  );
}
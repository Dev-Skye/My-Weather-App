import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {useFonts} from 'expo-font';
import WeatherScreen from './screens/WeatherScreen';
import ForecastScreen from './screens/ForecastScreen';

const Stack = createNativeStackNavigator();

export default function App() {

const[fontsLoaded] = useFonts({
  'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
  'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
  'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
  'Poppins-Medium': require('./assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  'Muli-Black': require('./assets/fonts/Muli-Black.ttf')
})

if (!fontsLoaded){
  return null;
}

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Weather' component={WeatherScreen}/>
            <Stack.Screen name='Forecast' component={ForecastScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

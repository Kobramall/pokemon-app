import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import Home from './screens/Home';
import Stats from './screens/Stats';


export default function App() {
  
  const [pokeArr, setPokeArr] = useState([])
  const [currentPoke, setCurrentPoke] = useState('')

  const Stack = createNativeStackNavigator();
  
  useEffect(() => {
   axios.get('https://pokeapi.co/api/v2/pokemon')
   .then((res) => {setPokeArr(res.data.results)})
   .catch((err) => console.log(err))
  });
  


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Stats" component={Stats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  pokeContainer: {
        backgroundColor: '#5ca904',
        padding: 5,
        fontSize: 40,
        marginTop: 10
  }
});

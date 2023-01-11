import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios'

 
export default function Home({ navigation }) {
  
  const [pokeArr, setPokeArr] = useState([{id:0, name:'bulbasaur'}, {id:1, name:'Ivysaur'}])
 
  
  useEffect(() => {
   axios.get('https://pokeapi.co/api/v2/pokemon')
   .then((res) => {setPokeArr(res.data.results)})
   .catch((err) => console.log(err))
  });

  const pressHandler = (poke) => {
     
    navigation.navigate('Stats', {
      poke: poke,
     })
  }
  
  return (
    <View style={styles.container}>
      {pokeArr.map(pokemon => {
        return (
             <TouchableOpacity style={styles.pokeContainer} key={pokemon.id} activeOpacity={0.5} onPress={() => {pressHandler(pokemon.name)}}>
               <Text>{pokemon.name}</Text>
             </TouchableOpacity>
        )
      })}
      <StatusBar style="auto" />
    </View>
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
        marginTop: 5
  }
});

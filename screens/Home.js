import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import axios from 'axios'

 
export default function Home({ navigation }) {
  
  const [pokeArr, setPokeArr] = useState([{id:0, name:'bulbasaur'}, {id:1, name:'Ivysaur'}])

  
  useEffect(() => {
   axios.get('https://pokeapi.co/api/v2/pokemon')
   .then((res) => {setPokeArr(res.data.results)})
   .catch((err) => console.log(err))
  });

  const pressHandler = (poke) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    .then((res) => {navigationHandler(res.data)})
    .catch((err) => console.log(err))
    
    
  }

  const navigationHandler = (pokeObj) => {
    navigation.navigate('Stats', {
      pokeObj: pokeObj,
     })
  }
  
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
         <Text style={styles.title}>Press on the Pokemon to see it's stats</Text>
            {pokeArr.map((pokemon, index) => {
        
              return (
                 <TouchableOpacity style={styles.pokeContainer} key={index} activeOpacity={0.5} onPress={() => {pressHandler(index + 1)}}>
                    <Text style={styles.text}>{pokemon.name}</Text>
                 </TouchableOpacity>
                 )})}
      <StatusBar style="auto" />
      </ScrollView>
      <Image source={{url: 'https://thumbs.dreamstime.com/b/pokeball-logo-isolated-white-background-kobe-japan-august-simple-image-play-pokemon-game-smartphone-application-pokemon-88378646.jpg'}} style={{width: 50, height: 50}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  scrollContainer:{
    flex: 1,
    alignItems: 'center',
    textAlign: 'center'
  },
  pokeContainer: {
        flex: 1,
        backgroundColor: '#5ca904',
        fontSize: 40,
        textAlign: 'center',
        alignContent: 'center',
        marginTop: 7,
        height: 40,
        width: 100
  },
  title: {
    fontSize: 20
  },
  text: {
  textAlign: 'center',
  marginTop: 5
  }
});

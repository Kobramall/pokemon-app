import { useState, useEffect } from "react"
import axios from "axios";
import { View, Text } from "react-native"

export default function Stats({route}){
   
    const [ pokeObj, setPokeObj] = useState({})
    
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.poke}`)
        .then((res) => {setPokeObj(res.data)})
        .catch((err) => console.log(err))
       });

 
        
       
    return(
        <View>
          <Text>{pokeObj.name}</Text>
         <View> 
        
         </View>   
        </View>
    )
}
import { View, Text, StyleSheet } from "react-native"

export default function Stats({route}){
   
    const { pokeObj } = route.params
    
      const typeColor = (type) => {
        if(type === 'grass'){
            return '#7AC74C'
        }else if(type === 'fire'){
            return '#EE8130'
        }else if(type === 'water'){
            return '#6390F0'
        }else if(type === 'bug'){
            return '#A6B91A'
        }else if(type === 'normal'){
            return '#A8A77A'
        }if(type === 'flying'){
            return '#A98FF3'
        }else{
            return '#A33EA1'
        }
      }
 

    return(
        <View style={styles.mainContainer}>
          <Text style={styles.name}>{pokeObj.name}</Text>
          <View>
            <Text style={styles.title}>Type</Text>
            {pokeObj.types.map(item =>{
            return <Text style={{backgroundColor: typeColor(item.type.name), marginTop: 3, marginBottom: 2, textAlign:'center', height: 30, borderColor: '#000', borderWidth: 3}}>{item.type.name}</Text>

           })}
           </View>
           <View style={styles.statContainer}>
            <Text style={styles.title}>Base Stats</Text>
           {pokeObj.stats.map(item =>{
            return ( <View style={styles.stat}>
                       <Text style={styles.text}>{item.stat.name}:</Text>
                       <Text style={styles.text}>{item.base_stat}</Text>
                    </View> 
                    )
           })}
           </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
      backgroundColor: '#fff',
     alignItems: 'center',
      padding: 2,
      marginTop: 5
    },
    statContainer:{
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 3,
        borderWidth: 5,
        borderColor: '#FF0000',
        padding: 10
    },
    stat: {
        flex: 1,
        flexDirection: 'row',
        textAlign: 'center',
        marginTop: 10,
        backgroundColor: '#FF0000',
        width: 265,
        borderRadius: 30,
    },
    text:{
         flex: 1,
         textAlign: 'center',
         justifyContent: 'center',
         alignItems: 'flex-start',
         color: '#fff',
         fontSize: 15,
         marginTop: 30
    },
    name:{
       fontSize: 50, 
    },
    title: {
       fontSize: 30
    }
    
  });
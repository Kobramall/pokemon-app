import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Stats from './screens/Stats';


export default function App() {
  

  const Stack = createNativeStackNavigator();

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Stats" component={Stats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


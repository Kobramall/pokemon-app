import { createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home';
import Stats from '../screens/Stats';

const screens = {
   Home: {
     screen: Home
   },
   Stats: {
    screen: Stats
   }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
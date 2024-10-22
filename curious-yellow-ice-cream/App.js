import WelCome from './components/WelCome'
import BikeList from './components/BikeList'
import BikeDetail from './components/BikeDetail'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelCome} />
        <Stack.Screen name="BikeList" component={BikeList} />
        <Stack.Screen name="BikeDetail" component={BikeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


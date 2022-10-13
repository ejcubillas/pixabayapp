import { Pressable } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';
import ResultScreen from '../screens/ResultScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()} style={{ paddingHorizontal: 8 }}>
      <AntDesign name="arrowleft" color="#000" size={35}/>
    </Pressable>
  )
  
}

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerTitle: '',
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ResultScreen"
        component={ResultScreen}
        options={{
          headerLeft: BackButton
        }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          headerLeft: BackButton
        }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigation;
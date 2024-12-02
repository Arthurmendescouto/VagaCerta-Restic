import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import List from './List';
import MyForm from './Form';
import Details from './Details';
import Profile from './Profile';
import { RootStackParamList } from '../utils/Types';


const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={List} />
        <Stack.Screen name="FormScreen" component={MyForm} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

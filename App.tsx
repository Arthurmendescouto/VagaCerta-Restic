import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserProvider } from './Context/UserContext';
import { Routes } from './src/utils/Routes';

import theme from './src/theme';

import Login from './src/screens/Login';
import FormScreen  from './src/screens/Form';
import List  from './src/screens/List';
import Profile  from './src/screens/Profile';
import Details  from './src/screens/Details';
import { RootNavigator } from './src/screens/navigator.root';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

function Auth(){
  
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color }) => {
      let iconName: "home" | "home-outline" | "person"|"person-outline";

        if (route.name === 'Home') {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === 'Profile') {
          iconName = focused ? "person" : "person-outline";
        }

        return <Ionicons name={iconName} size={16} color={color} />;
      },
      tabBarActiveTintColor: theme.COLORS.GREEN,
      tabBarInactiveTintColor: theme.COLORS.GRAY_03,
      tabBarStyle: {
        backgroundColor: theme.COLORS.GRAY_01,
      },
      tabBarLabelStyle: {
        fontWeight: 800,
      },
    })}
    >
      <Tab.Screen name="Home">
          {() => (
            <HomeStack.Navigator screenOptions={{ headerShown: false }}>
              <HomeStack.Screen name={Routes.LIST} component={List} />
              <HomeStack.Screen name={Routes.DETAILS} component={Details} />
            </HomeStack.Navigator>
          )}
      </Tab.Screen>
      <Tab.Screen name={Routes.PROFILE} component={Profile} />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <UserProvider>
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
    </UserProvider>
  );
}
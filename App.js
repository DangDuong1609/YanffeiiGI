import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer, View, Text } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from "./src/components/HomePage/Home";
import Profile from "./src/components/ProfilePage";

const HomePage = createNativeStackNavigator();
const ProfilePage = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import {
  PencilIcon,
} from "react-native-heroicons/outline";

const styles = StyleSheet.create({
  droidSafeArea: {
    paddingTop: Platform.OS === 'android' ? -36 : -36,
    backfaceVisibility: "visible",
    overflow: "hidden",
    position: "absolute",
  },
});

export default function App() {
  return (
    <NavigationContainer style={styles.droidSafeArea}>
      <TailwindProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({ 
            headerShown: false,
            showLabel: false,
            // tabBarShowLabel: false,
            tabBarStyle: {
              position: 'absolute',
              backgroundColor: '#00000000'
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'HomePage') {
                iconName = focused
                  ? 'md-home'
                  : 'md-home-outline';
              } else if (route.name === 'ProfilePage') {
                iconName = focused ? 'ios-people-circle' : 'ios-people-circle-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen
            name="HomePage"
            options={{
              title: 'HomePage',
            }}
          >
            {() => (
              <HomePage.Navigator>
                <HomePage.Screen
                  name="Home"
                  component={Home}
                  options={{
                    title: 'Overview',
                  }}
                />
              </HomePage.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen name="ProfilePage">
            {() => (
              <ProfilePage.Navigator>
                <ProfilePage.Screen
                  name="Home"
                  component={Profile}
                  options={{ title: 'Overview' }}
                />
              </ProfilePage.Navigator>
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
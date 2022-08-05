import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Platform } from 'react-native';

import Home from "./src/components/HomePage/Home";

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    paddingTop: Platform.OS === 'android' ? 0 : 25
  },
});

export default function App() {
  return (
    <NavigationContainer style={styles.droidSafeArea}>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Overview' }}
          />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
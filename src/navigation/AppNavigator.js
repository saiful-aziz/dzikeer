import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DzikirPagiScreen from '../screens/DzikirPagiScreen';
import DzikirPetangScreen from '../screens/DzikirPetangScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2e7d32',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Dzikeer',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DzikirPagi"
          component={DzikirPagiScreen}
          options={{
            title: 'Dzikir Pagi',
          }}
        />
        <Stack.Screen
          name="DzikirPetang"
          component={DzikirPetangScreen}
          options={{
            title: 'Dzikir Petang',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

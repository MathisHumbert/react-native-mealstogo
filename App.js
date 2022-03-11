// Basic React import
import React from 'react';

// Expo import for status bar
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

// Theme for styled components
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';

// React Navigator
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Icons
import { Ionicons } from '@expo/vector-icons';

// Fonts for styled components
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

// Screens
import RestaurantScreen from './src/features/restaurants/screens/restaurants.screen';

// Context
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';

import { SafeArea } from './src/components/utility/safe-area.component';
import { Text } from 'react-native';

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings',
};

function MapScreen() {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}

function SettingsScreen() {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  };
};

export default function App() {
  const [oswalLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswalLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen
                  name='Restaurants'
                  component={RestaurantScreen}
                  options={{ headerShown: false }}
                />
                <Tab.Screen
                  name='Map'
                  component={MapScreen}
                  options={{ headerShown: false }}
                />
                <Tab.Screen
                  name='Settings'
                  component={SettingsScreen}
                  options={{ headerShown: false }}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}

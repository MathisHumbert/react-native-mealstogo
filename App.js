// Basic React import
import React from 'react';

// Expo import for status bar
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

// Theme for styled components
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';

// Fonts for styled components
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

// Screens
import RestaurantScreen from './src/features/restaurants/screens/restaurants.screen';

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
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}

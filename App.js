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

// Context
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavouriteContextProvider } from './src/services/favourites/favourites.context';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

// Screen Navigator
import { Navigation } from './src/infrastructure/navigation';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyChncgb60ofHWpRt51bPPH_1FMLtkxBcSM',
  authDomain: 'reactnative-mealstogo.firebaseapp.com',
  projectId: 'reactnative-mealstogo',
  storageBucket: 'reactnative-mealstogo.appspot.com',
  messagingSenderId: '225413781277',
  appId: '1:225413781277:web:1351e230ef7d79458373f4',
};

initializeApp(firebaseConfig);

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
        <AuthenticationContextProvider>
          <FavouriteContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouriteContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}

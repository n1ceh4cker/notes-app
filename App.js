import React from 'react';
import { Provider as PaperProvider, configureFonts, DefaultTheme, Button } from 'react-native-paper';
import { fontConfig } from './config/font';
import * as Font from 'expo-font';
import Navigation from './components/Navigation';
import NoteContextProvider from './context/NoteContext';
import { ActivityIndicator } from 'react-native';

const theme = {
    ...DefaultTheme,
    fonts: configureFonts(fontConfig)
  }
export default function App() {
  const [fontsLoaded] = Font.useFonts({
    'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
    'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
    'Quicksand-SemiBold': require('./assets/fonts/Quicksand-SemiBold.ttf')
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />
  }
  
  return (
    <NoteContextProvider>
      <PaperProvider theme={theme}>
        <Navigation />
      </PaperProvider>
    </NoteContextProvider>
  );
}
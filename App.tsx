import { NativeBaseProvider, StatusBar, Center } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import React from 'react';

import { Loading } from './src/components/loading';

import { Home } from './src/screens/Home';
import { CounterProvider } from './src/context';
import { Routes } from './src/routes';
import { Header } from './src/components/header';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider>
      <CounterProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        /> 
          <Routes />
      </CounterProvider>
    </NativeBaseProvider>
  );
}


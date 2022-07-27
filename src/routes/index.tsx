import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Header } from '../components/header';

import { AppRoutes } from './app.routes';

export function Routes() {

  return (
    <NavigationContainer>
      <Header />
      <AppRoutes />
    </NavigationContainer>
  )
}
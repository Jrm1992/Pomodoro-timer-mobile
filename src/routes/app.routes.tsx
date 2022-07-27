import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Work } from '../components/work';
import { Rest } from '../components/rest';
import { Home } from '../screens/Home';
import { Workdone } from '../components/workdone';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="home" component={Home} />
        <Screen name="work" component={Work} />
        <Screen name="rest" component={Rest} />
        <Screen name="workdone" component={Workdone} />
      </Navigator>
  )
}
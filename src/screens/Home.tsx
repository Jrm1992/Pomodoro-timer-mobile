import { Center, VStack } from 'native-base';
import React from 'react';
import { Header } from '../components/header';
import { Setup } from '../components/setup';

export function Home() {
  return (
    <VStack>
      <Setup />
    </VStack>
  );
}
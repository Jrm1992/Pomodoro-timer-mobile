import { useNavigation } from '@react-navigation/native';
import { HStack, IconButton, Text } from 'native-base';
import { House, Timer } from 'phosphor-react-native';
import React from 'react';

export function Header() {
  const navigation = useNavigation();
  
  return (
    <HStack 
      w="full"
      justifyContent="center"
      alignItems="center"
      bg="gray.600"
      pb={4}
      pt={16}
    >
      <HStack pr={20}>
        <IconButton
          icon={<House color="#04D361" size={28} />}
          onPress={() => navigation.navigate('home')}
        />
      </HStack>
      <HStack pr={20}>
        <Text fontSize='4xl' color="#04D361">
          Pomodoro
        </Text>
        <IconButton
          icon={<Timer color="#04D361" size={28} />}
        />
      </HStack>

    </HStack>
  );
}
import { VStack, Text } from 'native-base';
import React from 'react';
import { Audio } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import { Button } from './button';

export function Workdone() {
  const navigation = useNavigation();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/Sounds/Bravo.mp3')
    );
    await sound.playAsync(); }

  React.useEffect(() => {
    playSound()
    }, []);

    function handleGoHome(){
      navigation.navigate('home')
    }

  return (
    <VStack alignItems="center" h='full' bg='gray.700'>
      <Text
        color='#81D8F7'
        mt={40}
        fontWeight="bold"
        fontSize="6xl"
      >
        Work Done!
      </Text>
      <Button 
            w={40}
            mt={20}
            title={"Voltar ao Inicio"}
            onPress={ handleGoHome }
          />
    </VStack>
  );
}
import { VStack, Text, HStack, Progress } from 'native-base';
import { useTimer } from 'react-timer-hook';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { Audio } from 'expo-av';

import { CounterContext } from '../context/context';
import { Button } from './button';
import { decrementSessao } from '../context/action';

export function Rest() {
  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext

  const [sound, setSound] = useState<any>();

  const navigation = useNavigation();

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + (counterState.trabalho * 60));

  const {
    seconds,
    minutes,
    pause,
    resume,
    isRunning,
    restart,
  } = useTimer({ expiryTimestamp, 
    onExpire: () => {
      if(counterState.sessao > 1){
        playSound()
        setTimeout(() => {
          navigation.navigate('work')
        }, 2000),
        decrementSessao(counterDispatch)
      }else{
        navigation.navigate('workdone')
      }
  } });

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/Sounds/Bell.mp3')
    );
    setSound(sound);

    await sound.playAsync(); }

    React.useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);

  return (
    <VStack alignItems="center" h='full' bg='gray.700'>
      <Text
        color='#81D8F7'
        mt={20}
        fontWeight="bold"
        fontSize="5xl"
      >
        Take a Break!
      </Text>
      <VStack
        bg='gray.500'  
        rounded='md'
        mt={10}
        h={'200'}
        w={'300'}
      >
        <Text fontWeight='bold' textAlign='center' color='gray.300' fontSize="8xl" >
          {minutes < 10 ? 0 : ''}{minutes}:{seconds < 10 ? 0 : ''}{seconds}
        </Text>
        <Progress 
          size="sm" 
          mt={6} 
          colorScheme="blue" 
          value={((minutes * 60 + seconds) / (counterState.trabalho * 60)) * 100 } 
          mx="4" 
        />

      </VStack>
        <HStack justifyContent="space-between" w={'300'}>
          <Button 
            w={40}
            mt={6}
            title={isRunning ? "PAUSE" : "RESUME"}
            onPress={isRunning ? pause : resume }
          />
            <Button 
            px={8}
            mt={6}
            title='RESTART'
            onPress={() => {
              const time = new Date();
              time.setSeconds(time.getSeconds() + (counterState.trabalho * 60));
              restart(time)
            }}/>
        </HStack>

    </VStack>
  );
}
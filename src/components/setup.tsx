import React, { useContext, useState } from 'react'
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react-native'
import { VStack, Text, HStack, IconButton } from 'native-base';

import {
  incrementTrabalho,
  decrementTrabalho,
  incrementPausa,
  decrementPausa,
  incrementSessao,
  decrementSessao,
} from '../context/action'
import { CounterContext } from '../context/context'
import { Button } from './button';
import { useNavigation } from '@react-navigation/native';

export function Setup() {
  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  const navigation = useNavigation();

  function handleStart(){
    navigation.navigate('work');
  }

  return (
    <VStack alignItems="center" h='full' bg='gray.700'>
      <Text
        color='#81D8F7'
        mt={9}
        fontWeight="bold"
        fontSize="5xl"
      >
        Setup Options
      </Text>

      <HStack mt={10}>
        <HStack>
          <VStack>
          <IconButton
            icon={<ArrowCircleUp color="#04D361" size={28} />}
            onPress={() => incrementTrabalho(counterDispatch)}
          />
          <IconButton
            icon={<ArrowCircleDown color="#04D361" size={28} />}
            onPress={() => {if(counterState.trabalho > 1){{decrementTrabalho(counterDispatch)}}}}
          />
          </VStack>
          <VStack>
            <Text fontSize="6xl" color='gray.300'>
            {counterState.trabalho < 10 ? "0" : ''}{counterState.trabalho}
            </Text>
            <Text pl={1} color='gray.300'>
              Trabalho
            </Text>
          </VStack>
        </HStack>
      </HStack>

      <HStack mt={10}>
        <HStack>
          <VStack>
          <IconButton
            icon={<ArrowCircleUp color="#04D361" size={28} />}
            onPress={() => incrementPausa(counterDispatch)}
          />
          <IconButton
            icon={<ArrowCircleDown color="#04D361" size={28} />}
            onPress={() => {if(counterState.pausa > 1){{decrementPausa(counterDispatch)}}}}
          />
          </VStack>
          <VStack>
            <Text fontSize="6xl" color='gray.300'>
            {counterState.pausa < 10 ? "0" : ''}{counterState.pausa}
            </Text>
            <Text pl={3} color='gray.300'>
              Pausa
            </Text>
          </VStack>
        </HStack>
      </HStack>

      <HStack mt={10}>
        <HStack>
          <VStack>
          <IconButton
            icon={<ArrowCircleUp color="#04D361" size={28} />}
            onPress={() => incrementSessao(counterDispatch)}
          />
          <IconButton
            icon={<ArrowCircleDown color="#04D361" size={28} />}
            onPress={() => {if(counterState.sessao > 1){{decrementSessao(counterDispatch)}}}}
          />
          </VStack>
          <VStack>
            <Text fontSize="6xl" color='gray.300'>
              {counterState.sessao < 10 ? "0" : ''}{counterState.sessao}
            </Text>
            <Text pl={1} color='gray.300'>
              Sessoes
            </Text>
          </VStack>
        </HStack>
      </HStack>

      <Button
        mt={10}
        title="Start"
        w="180px"
        onPress={handleStart}
      />
    

    </VStack>
  );
}
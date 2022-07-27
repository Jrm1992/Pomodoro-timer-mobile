import P from 'prop-types';
import { useReducer } from 'react';
import { CounterContext } from './context';
import { data } from './data';
import { reducer } from './reducer';
import React from 'react';

export const CounterProvider = ({ children }:any) => {
  const [counterState, counterDispatch] = useReducer(reducer, data);

  return (
    <CounterContext.Provider value={{ counterState, counterDispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

CounterProvider.propTypes = {
  children: P.node.isRequired,
};

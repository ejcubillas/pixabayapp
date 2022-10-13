/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ResultContext } from './src/context/ResultContext';
import MainNavigation from './src/navigation/main';

const App = () => {
  const [result, setResult] = useState([])

  return (
    <ResultContext.Provider value={{result, setResult}}>
      <NavigationContainer>
        <MainNavigation/>
      </NavigationContainer>
    </ResultContext.Provider>
  );
};



export default App;

import React from 'react';
import {
  StatusBar,
} from 'react-native';
import Colors from './src/Colors/colors';
import MyStack from './src/navigation/MyStack';

const App = () => {
  return <>
  <StatusBar barStyle='dark-content' backgroundColor={Colors.white} />
  <MyStack />
  </>;
};

export default App;

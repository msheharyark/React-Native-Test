import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OverviewScreen from '../screens/Overview';
const OverviewStack = createStackNavigator();
export const OverviewStackNavigator = () => {
  return (
    <OverviewStack.Navigator
      >
      <OverviewStack.Screen
        name="OverviewScreen"
        component={OverviewScreen}
        navigationOptions
        options={{headerMode: 'none',headerShown: false}}
      />
    </OverviewStack.Navigator>
  );
};

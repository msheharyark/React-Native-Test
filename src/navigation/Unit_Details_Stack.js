import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Unit_Details from '../screens/Unit_Details';
const Unit_Details_Stack = createStackNavigator();
export const UnitDetailsStackNavigator = () => {
  return (
    <Unit_Details_Stack.Navigator
      >
      <Unit_Details_Stack.Screen
        name="Unit_Details"
        component={Unit_Details}
        options={{headerShown: false}}
      />
    </Unit_Details_Stack.Navigator>
  );
};
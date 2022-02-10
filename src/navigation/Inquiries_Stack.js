import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InquiriesScreen from '../screens/Inquiries';
const InquiriesStack = createStackNavigator();
export const InquiriesStackNavigator = () => {
  return (
    <InquiriesStack.Navigator
      >
      <InquiriesStack.Screen
        name="InquiriesScreen"
        component={InquiriesScreen}
        options={{headerShown: false}}
      />
      
    </InquiriesStack.Navigator>
  );
};

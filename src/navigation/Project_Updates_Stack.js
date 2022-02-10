import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Project_Updates from '../screens/Project_Updates';
const Project_Updates_Stack = createStackNavigator();
export const ProjectUpdatesStackNavigator = () => {
  return (
    <Project_Updates_Stack.Navigator
      >
      <Project_Updates_Stack.Screen
        name="Project_Updates"
        component={Project_Updates}
        options={{headerMode: 'none',headerShown: false}}
      />
    </Project_Updates_Stack.Navigator>
  );
};
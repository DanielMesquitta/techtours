import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'

import Book from './pages/Book'
import List from './pages/List'
import Login from './pages/Login'

const Stack = createStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f05a5b',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',

          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Book" component={Book} />
        <Stack.Screen
          name="List"
          options={{
            headerTitle: 'Empresas',
          }}
          component={List}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

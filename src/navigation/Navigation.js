import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { User } from '../scenes/Private/User/User'
import { Login } from '../scenes/Public/Login/Login'
import { Product } from '../scenes/Private/Product/Product'
import { Register } from '../scenes/Public/Register/Register'
import { useSelector } from 'react-redux'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

export const Navigation = () => {

  const { isAuthenticated } = useSelector(state => state.user)

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <Drawer.Navigator initialRouteName="User">
          <Drawer.Screen name="User" component={User} />
          <Drawer.Screen name="Product" component={Product} />
        </Drawer.Navigator>
      ) : (
          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        )
      }
    </NavigationContainer>
  )
}
import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import ScreenComponent from './Components/ScreenComponent'
import Intro from './Screens/IntroScreen/Intro'
import AuthScreen from './Screens/AuthenticationScreen/AuthScreen'

const Index = () => {

    const Stack = createStackNavigator();
    const IntroView = ({navigation})=>{
        return <ScreenComponent Component={Intro} navigation = {navigation}/>
    }
    const AuthView = ({navigation})=>{
      return <ScreenComponent Component={AuthScreen} navigation = {navigation}/>
  }
    

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Intro' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Intro' component={IntroView}/>
            <Stack.Screen name='Login' component={AuthView}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Index
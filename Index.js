import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import ScreenComponent from './Components/ScreenComponent'
import Intro from './Screens/IntroScreen/Intro'

const Index = () => {

    const Stack = createStackNavigator();
    const IntroView = ()=>{
        return <ScreenComponent Component={Intro}/>
    }

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Intro' component={IntroView}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Index
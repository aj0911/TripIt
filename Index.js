import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import ScreenComponent from './Components/ScreenComponent'
import Intro from './Screens/IntroScreen/Intro'
import AuthScreen from './Screens/AuthenticationScreen/AuthScreen'
import { ScrollView } from 'react-native-gesture-handler'

const Index = () => {

    const Stack = createStackNavigator();
    const IntroView = ({...rest})=>{
        return <ScreenComponent Component={Intro} {...rest}/>
    }
    const AuthView = ({...rest})=>{
      return <ScrollView>
        <AuthScreen {...rest}/>
      </ScrollView>
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
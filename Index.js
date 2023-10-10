import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import ScreenComponent from './Components/ScreenComponent'
import Intro from './Screens/IntroScreen/Intro'
import AuthScreen from './Screens/AuthenticationScreen/AuthScreen'
import { ScrollView } from 'react-native'
import SearchScreen from './Screens/AditionalScreens/SearchScreen'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import BottomNav from './Components/BottomNav'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const Index = () => {

    const Stack = createStackNavigator();
    
    //Views
    const IntroView = ({...rest})=>{
        return <ScreenComponent Component={Intro} {...rest}/>
    }
    const AuthView = ({...rest})=>{
      return <ScrollView>
        <AuthScreen {...rest}/>
      </ScrollView>
    }

    const SearchView = ({...rest})=>{
      return (
        <ScrollView>
          <SearchScreen {...rest}/>
        </ScrollView>
      )
    }
    const HomeView = ({...rest})=>{
      return <ScreenComponent Component={HomeScreen} {...rest}/>
    }
    

  return (
    <>
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Intro' screenOptions={{headerShown:false}}>
              <Stack.Screen name='Intro' component={IntroView}/>
              <Stack.Screen name='Login' component={AuthView}/>
              <Stack.Screen name='Search' component={SearchView}/>
              <Stack.Screen name='Home' component={HomeView}/>
          </Stack.Navigator>
      </NavigationContainer>
      <GestureHandlerRootView>
        <NavigationContainer>
          <BottomNav/>
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
      
  )
}

export default Index
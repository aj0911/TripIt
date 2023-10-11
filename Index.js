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
import Countries from './Screens/CountriesScreen/Countries'
import InviteScreen from './Screens/InviteFriendScreen/InviteScreen'
import MyTripScreen from './Screens/MyTripScreens/MyTripScreens'
import UserScreen from './Screens/UserScreens/UserScreen'
import NotificationScreen from './Screens/NotificationScreen/NotificationScreen'
import FavScreen from './Screens/FavScreen/FavScreen'

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
    const CountryView = ({...rest})=>{
      return <ScreenComponent Component={Countries} {...rest}/>
    }

    const InviteView = ({...rest})=>{
      return <ScreenComponent Component={InviteScreen} {...rest}/>
    }
    const MyTripView = ({...rest})=>{
      return <ScreenComponent Component={MyTripScreen} {...rest}/>
    }
    const NotificationView = ({...rest})=>{
      return <ScreenComponent Component={NotificationScreen} {...rest}/>
    }
    const UserScreenView = ({...rest})=>{
      return <ScreenComponent Component={UserScreen} {...rest}/>
    }
    const FavScreenView = ({...rest})=>{
      return <ScreenComponent Component={FavScreen} {...rest}/>
    }
    

  return (
    <>
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Intro' screenOptions={{headerShown:false}}>
              <Stack.Screen name='Intro' component={IntroView}/>
              <Stack.Screen name='Login' component={AuthView}/>
              <Stack.Screen name='Search' component={SearchView}/>
              <Stack.Screen name='Home' component={HomeView}/>
              <Stack.Screen name='Countries' component={CountryView}/>
              <Stack.Screen name='Invite' component={InviteView}/>
              <Stack.Screen name='MyTrip' component={MyTripView}/>
              <Stack.Screen name='Notification' component={NotificationView}/>
              <Stack.Screen name='Users' component={UserScreenView}/>
              <Stack.Screen name='Fav' component={FavScreenView}/>
          </Stack.Navigator>
      </NavigationContainer>
    </>
      
  )
}

export default Index
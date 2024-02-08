import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import ScreenComponent from './Components/ScreenComponent'
import Intro from './Screens/IntroScreen/Intro'
import AuthScreen from './Screens/AuthenticationScreen/AuthScreen'
import { ScrollView, View } from 'react-native'
import SearchScreen from './Screens/AditionalScreens/SearchScreen'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import Countries from './Screens/CountriesScreen/Countries'
import InviteScreen from './Screens/InviteFriendScreen/InviteScreen'
import MyTripScreen from './Screens/MyTripScreens/MyTripScreens'
import UserScreen from './Screens/UserScreens/UserScreen'
import NotificationScreen from './Screens/NotificationScreen/NotificationScreen'
import FavScreen from './Screens/FavScreen/FavScreen'
import TourDetails from './Screens/CountriesScreen/TourDetails'
import HotelDetail from './Screens/CountriesScreen/HotelDetail'
import Booking from './Screens/BookingScreens/Booking'
import BookingDetails from './Screens/BookingScreens/BookingDetails'
import Toast from 'react-native-toast-message'
import { useSelector } from 'react-redux'

const Index = ({onLayoutRootView}) => {

    const Stack = createStackNavigator();
    const authReducer = useSelector(state=>state.auth)
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
    const TourDetailsView = ({...rest})=>{
      return <ScreenComponent Component={TourDetails} {...rest}/>
    }
    const HotelDetailsView = ({...rest})=>{
      return <ScreenComponent Component={HotelDetail} {...rest}/>
    }
    const BookingView = ({...rest})=>{
      return <ScreenComponent Component={Booking} {...rest}/>
    }
    const BookingDetailView = ({...rest})=>{
      return <ScreenComponent Component={BookingDetails} {...rest}/>
    }
  return (
    <>
      <NavigationContainer onReady={onLayoutRootView}>
          <Stack.Navigator initialRouteName={(authReducer.isAuth)?'Home':'Intro'} screenOptions={{headerShown:false}}>
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
              <Stack.Screen name='TourDetails' component={TourDetailsView}/>
              <Stack.Screen name='HotelDetails' component={HotelDetailsView}/>
              <Stack.Screen name='Booking' component={BookingView}/>
              <Stack.Screen name='BookingDetails' component={BookingDetailView}/>
          </Stack.Navigator>
      </NavigationContainer>
      <Toast/>
    </>
      
  )
}

export default Index
import { View, Text, TouchableOpacity, Animated, ImageBackground, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import BottomNav from '../../Components/BottomNav'
import NotificationStyleSheet from './Notification.Style'
import HomeStyleSheet from '../HomeScreen/Home.Style'
import DrawerNav from '../../Components/DrawerNav'
import { Ionicons } from '@expo/vector-icons'
import Constants, { tourNotifications } from '../../Components/Constants'

const NotificationScreen = ({navigation,route}) => {
  const [drawerOpen,setDrawerOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
    const startAnimation = ()=>{
        Animated.timing(animation,{
            toValue:drawerOpen?0:1,
            useNativeDriver:true,
            duration:300
        }).start();
    }
  return (
    <View style={{...HomeStyleSheet.home,height:(drawerOpen)?Constants.FULLVIEW_HEIGHT:'auto'}}>
      <DrawerNav naviagation={navigation} startAnimation={startAnimation} animation={animation} setDrawerOpen={setDrawerOpen}/>
      <View style={HomeStyleSheet.header}>
        <TouchableOpacity onPress={()=>{setDrawerOpen(true);startAnimation()}}>
            <Ionicons size={25} name='menu-sharp'/>
        </TouchableOpacity>
        <Text style={HomeStyleSheet.header.text}>Notification</Text>
        <View></View>
      </View>
      <View style={NotificationStyleSheet.notificationCardView}>
        {
          tourNotifications.map((notification,index)=>(
            <TouchableOpacity key={index} style={NotificationStyleSheet.card}>
              <Image style={{width:70,height:70,borderRadius:35}} source={notification.imageUrl}/>
              <View>
                <Text style={NotificationStyleSheet.card.text}>{notification.notificationText}</Text>
                <Text style={NotificationStyleSheet.card.date}>{notification.dateTime}</Text>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
      <BottomNav navigation={navigation} route={route}/>
    </View>
  )
}

export default NotificationScreen
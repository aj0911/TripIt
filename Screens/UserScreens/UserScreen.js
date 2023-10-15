import { View, Text, TouchableOpacity, Animated, ImageBackground, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import BottomNav from '../../Components/BottomNav'
import UserStyleSheet from './User.Style'
import HomeStyleSheet from '../HomeScreen/Home.Style'
import DrawerNav from '../../Components/DrawerNav'
import { Ionicons } from '@expo/vector-icons'
import Constants from '../../Components/Constants'
import Colors from '../../assets/Colors'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import AuthStyleSheet from '../AuthenticationScreen/AuthScreen.Style'
import { LinearGradient } from 'expo-linear-gradient'
import LoginWarning from '../AditionalScreens/LoginWarning'

const UserScreen = ({navigation,route}) => {
  const [drawerOpen,setDrawerOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const startAnimation = ()=>{
      Animated.timing(animation,{
          toValue:drawerOpen?0:1,
          useNativeDriver:true,
          duration:300
      }).start();
  }
  const authReducer = useSelector(state=>state.auth);
  const isLogin = authReducer.isAuth
  return (
    (!isLogin)?
    <LoginWarning navigation={navigation}/>
    :
    <View style={{...HomeStyleSheet.home,height:Constants.FULLVIEW_HEIGHT}}>
      <DrawerNav naviagation={navigation} startAnimation={startAnimation} animation={animation} setDrawerOpen={setDrawerOpen}/>
      <View style={HomeStyleSheet.header}>
        <TouchableOpacity onPress={()=>{setDrawerOpen(true);startAnimation()}}>
            <Ionicons size={25} name='menu-sharp'/>
        </TouchableOpacity>
        <Text style={HomeStyleSheet.header.text}>Profile</Text>
        <TouchableOpacity>
          <Text style={{fontFamily:'Medium',fontSize:16,color:Colors.mainCol}}>Edit</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{width:'100%'}}>
        <View style={UserStyleSheet.userView}>
          <TouchableOpacity style={UserStyleSheet.imgView}>
            <Image style={{width:200,height:200,borderRadius:100}} source={{uri:authReducer.user.img}}/>
          </TouchableOpacity>
          
          <View style={UserStyleSheet.profileView}>
            <View style={UserStyleSheet.data}>  
              <Text style={UserStyleSheet.data.field}>Name</Text>
              <Text style={UserStyleSheet.data.value}>{authReducer.user.name}</Text>
            </View>
            <View style={UserStyleSheet.data}>
              <Text style={UserStyleSheet.data.field}>Email</Text>
              <Text style={UserStyleSheet.data.value}>{authReducer.user.email}</Text>
            </View>
            <View style={UserStyleSheet.data}>
              <Text style={UserStyleSheet.data.field}>Phone Number</Text>
              <Text style={UserStyleSheet.data.value}>{authReducer.user.phone}</Text>
            </View>
            <View style={UserStyleSheet.data}>
              <Text style={UserStyleSheet.data.field}>Gender</Text>
              <Text style={UserStyleSheet.data.value}>{authReducer.user.gender}</Text>
            </View>
            <View style={UserStyleSheet.data}>
              <Text style={UserStyleSheet.data.field}>Date Of Birth</Text>
              <Text style={UserStyleSheet.data.value}>{authReducer.user.dob}</Text>
            </View>
            <View style={UserStyleSheet.data}>
              <Text style={UserStyleSheet.data.field}>Address</Text> 
              <Text style={UserStyleSheet.data.value}>{authReducer.user.address}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomNav navigation={navigation} route={route}/>
    </View>
  )
}

export default UserScreen
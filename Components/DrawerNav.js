import { View, Text, Animated, Image } from 'react-native'
import React, { useRef } from 'react'
import IndexStyleSheet from '../Index.Style'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Constants from './Constants'
import Colors from '../assets/Colors'
import { useDispatch, useSelector } from 'react-redux'
import Toast from 'react-native-toast-message'
import { logout } from '../Reducers/AuthReducer'

const DrawerNav = ({setDrawerOpen,animation,startAnimation,naviagation}) => {
  const authRed = useSelector(state=>state.auth)
  const navBars = [
    {
      icon:'notifications',
      text:'Notification',
      color:'#EF3532',
      navigate:'Notification'
    },
    {
      icon:'airplane',
      text:'Tours',
      color:'#74BEEB',
      navigate:'MyTrip'
    },
    {
      icon:'location',
      text:'Location',
      color:'#E600EB',
      navigate:'Countries'
    },
    {
      icon:'people',
      text:'Invite Friends',
      color:'#6F78DD',
      navigate:'Invite'
    },
    {
      icon:'settings',
      text:'Setting',
      color:'#59E066',
      navigate:'Users'
    },
    {
      icon:(authRed.isAuth)?'log-out':'log-in',
      text:(authRed.isAuth)?'Log Out':'Log In',
      color:'#A19A8F',
      navigate:(authRed.isAuth)?'Home':'Login'
    },
  ]
  const dispatch = useDispatch();
  return (
    <Animated.View style={[{...IndexStyleSheet.drawerNav},{
        transform:[{translateX:animation.interpolate({
            inputRange:[0,1],
            outputRange:[0,Constants.FULLVIEW_WIDTH]
        })}]
    }]}>
        <View style={{width:'100%',justifyContent:'center',alignItems:'flex-end'}}>
          <TouchableOpacity onPress={()=>{setDrawerOpen(false);startAnimation()}}>
              <Ionicons size={35} name='close'/>
          </TouchableOpacity>
        </View>
        {
          (!authRed.isAuth)?'':
          <View style={{width:'100%',justifyContent:'flex-start',alignItems:'center',marginTop:30}}>
            <TouchableOpacity style={{width:100,height:100,borderRadius:100,overflow:'hidden'}}>
              <Image style={{width:100,height:100,borderRadius:100,objectFit:'cover'}} source={{uri:authRed.user.img}}/>
            </TouchableOpacity>
            <Text style={IndexStyleSheet.drawerNav.name}>{authRed.user.name}</Text>
            <Text style={IndexStyleSheet.drawerNav.email}>{authRed.user.email}</Text>
          </View>
        }
        <View style={IndexStyleSheet.optionView}>
          {
            navBars.map((nav,index)=>(
              <TouchableOpacity onPress={()=>{setDrawerOpen(false);startAnimation();
              if(nav.text==='Log Out'){dispatch(logout());Toast.show({
                text1:'Success',
                text2: `Logout Successfully`,
                visibilityTime:3000,
                autoHide:true,
                type:'success'
            });};naviagation.navigate(nav.navigate)}} key={index} style={{...IndexStyleSheet.box,borderBottomWidth:(index===3)?.3:0}}>
                <View style={IndexStyleSheet.box.view}>
                  <Ionicons style={{backgroundColor:nav.color,padding:5,borderRadius:30}} size={20} color={Colors.bgCol} name={nav.icon}/>
                  <Text style={IndexStyleSheet.box.text}>{nav.text}</Text>
                </View>
                <Text style={{fontFamily:'Regular',fontSize:25}}>{'>'}</Text>
              </TouchableOpacity>
            ))
          }
        </View>
    </Animated.View>
  )
}

export default DrawerNav
import { View, Text, TouchableOpacity, Animated, Image, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import BottomNav from '../../Components/BottomNav'
import HomeStyleSheet from '../HomeScreen/Home.Style'
import DrawerNav from '../../Components/DrawerNav'
import { Ionicons } from '@expo/vector-icons'
import Constants, { Data } from '../../Components/Constants'
import Colors from '../../assets/Colors'
import StarComponent from '../../Components/StarComponent'
import AuthStyleSheet from '../AuthenticationScreen/AuthScreen.Style'

const InviteScreen = ({navigation,route}) => {
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
    <View style={{...HomeStyleSheet.home,height:Constants.FULLVIEW_HEIGHT}}>
      <DrawerNav naviagation={navigation} startAnimation={startAnimation} animation={animation} setDrawerOpen={setDrawerOpen}/>
      <View style={HomeStyleSheet.header}>
        <TouchableOpacity onPress={()=>{setDrawerOpen(true);startAnimation()}}>
            <Ionicons size={25} name='menu-sharp'/>
        </TouchableOpacity>
        <Text style={HomeStyleSheet.header.text}>Invite Friends</Text>
        <View></View>
      </View>
      <ScrollView style={{width:'100%'}}>
        <View style={{justifyContent:'center',alignItems:'center',width:'100%',paddingLeft:50,paddingRight:50,paddingTop:20,paddingBottom:20}}>
          <Text style={{fontFamily:'Bold',color:Colors.mainCol,fontSize:25,textAlign:'center',width:'100%',textAlignVertical:'center'}}>Share With Friends</Text>
          <Text style={{fontFamily:'Regular',color:Colors.navCol,fontSize:12,textAlign:'center',width:'100%',textAlignVertical:'center',marginBottom:20}}>Because of you, I laugh a little harder, smile a little brighter, and live a little better. Join me for a trip</Text>
          <Image style={{width:350,height:200,objectFit:'contain',marginBottom:20}} source={require('../../assets/Images/invite.png')}/>
          <TouchableOpacity style={AuthStyleSheet.boxView.btn}>
                <Text style={AuthStyleSheet.boxView.btn.text}>Invite Now</Text>
                <Ionicons name='arrow-forward' size={20} color={Colors.bgCol} style={{backgroundColor:Colors.mainColLight,borderRadius:35,padding:10}}/>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomNav navigation={navigation} route={route}/>
    </View>
  )
}

export default InviteScreen
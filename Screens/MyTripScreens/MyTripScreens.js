import { View, Text, TouchableOpacity, Animated, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import BottomNav from '../../Components/BottomNav'
import HomeStyleSheet from '../HomeScreen/Home.Style'
import MyTripStyleSheet from './MyTrip.Style'
import DrawerNav from '../../Components/DrawerNav'
import { Ionicons } from '@expo/vector-icons'
import Constants, { Data, topPlaces } from '../../Components/Constants'
import Colors from '../../assets/Colors'
import StarComponent from '../../Components/StarComponent'
import AuthStyleSheet from '../AuthenticationScreen/AuthScreen.Style'
import { ScrollView } from 'react-native-gesture-handler'
import { onValue, ref } from 'firebase/database'
import { db } from '../../firebase'
import Toast from 'react-native-toast-message'
import { useSelector } from 'react-redux'

const MyTripScreens = ({navigation,route}) => {
  const [drawerOpen,setDrawerOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const startAnimation = ()=>{
      Animated.timing(animation,{
          toValue:drawerOpen?0:1,
          useNativeDriver:true,
          duration:300
      }).start();
  }
  const [data,setData] = useState([]);
  const authReducer = useSelector(state=>state.auth); 
  const getBookings = ()=>{
    onValue(ref(db,'booking'),(snapshot)=>{
      const res = Object.values(snapshot.val());
      const arr = res.filter(key=>key.email===authReducer.user.email);
      setData(arr);
    },(err)=>{
      Toast.show({
        text1:'Error',
        text2: `${err}`,
        visibilityTime:3000,
        autoHide:true,
        type:'error'
    }) 
    })
  }
  useEffect(()=>{
    if(!authReducer.isAuth){
      navigation.navigate('Login')
      return;
    }
    getBookings();
  },[])
  return (
    <View style={{...HomeStyleSheet.home,height:Constants.FULLVIEW_HEIGHT}}>
      <DrawerNav naviagation={navigation} startAnimation={startAnimation} animation={animation} setDrawerOpen={setDrawerOpen}/>
      <View style={HomeStyleSheet.header}>
        <TouchableOpacity onPress={()=>{setDrawerOpen(true);startAnimation()}}>
            <Ionicons size={25} name='menu-sharp'/>
        </TouchableOpacity>
        <Text style={HomeStyleSheet.header.text}>My Trip</Text>
        <View></View>
      </View>
      <ScrollView style={{width:'100%'}}>
        <View style={MyTripStyleSheet.tripViewCards}>
          {
            (data.length>0)?
            data.map((val,index)=>{
              return(
              <View key={index} style={MyTripStyleSheet.card}>
                <View style={MyTripStyleSheet.topCard}>
                  <Text style={{fontFamily:'Medium',fontSize:14}}>{val.country}</Text>
                  <Text style={{fontFamily:'Regular',fontSize:12,color:Colors.navCol}}>Booking on {(new Date(val.time)).getDate()}/{(new Date(val.time)).getMonth()+1}/{(new Date(val.time)).getFullYear()} </Text>
                </View>
                <View style={MyTripStyleSheet.midCard}>
                  <Image style={{height:50,width:50,borderRadius:25}} source={{uri:val.hotel.hotelImage}}/>
                  <View>
                    <Text style={{fontFamily:'Medium',fontSize:14}}>{val.hotel.name}</Text>
                    <Text  style={{fontFamily:'Regular',fontSize:12,color:Colors.navCol}}>{val.startTour} - {val.endTour}</Text>
                  </View>
                </View>
                <View style={MyTripStyleSheet.lowerCard}>
                  <TouchableOpacity onPress={()=>navigation.navigate('HotelDetails',{country:val.country,hotel:val.hotel})} style={MyTripStyleSheet.btn}>
                    <Text style={MyTripStyleSheet.btn.text}>Book Again</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{...MyTripStyleSheet.btn,borderLeftWidth:.3}}>
                    <Text style={MyTripStyleSheet.btn.text}>Need Help</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}):
            <Text style={{fontFamily:'Medium',textAlign:'center',fontSize:30,color:Colors.mainCol}}>No Booking is done by you.</Text>
          }
        </View>
      </ScrollView>
      <BottomNav navigation={navigation} route={route}/>
    </View>
  )
}

export default MyTripScreens
import { View, Text, TouchableOpacity, Animated, Image } from 'react-native'
import React, { useRef, useState } from 'react'
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
            Object.keys(topPlaces).map((places,index)=>{
              const place = topPlaces[places];
              return(
              <View key={index} style={MyTripStyleSheet.card}>
                <View style={MyTripStyleSheet.topCard}>
                  <Text style={{fontFamily:'Medium',fontSize:14}}>{places}</Text>
                  <Text style={{fontFamily:'Regular',fontSize:12,color:Colors.navCol}}>Booking on 15 Jan</Text>
                </View>
                <View style={MyTripStyleSheet.midCard}>
                  <Image style={{height:50,width:50,borderRadius:25}} source={{uri:place.image}}/>
                  <View>
                    <Text style={{fontFamily:'Medium',fontSize:14}}>{place.place}</Text>
                    <Text  style={{fontFamily:'Regular',fontSize:12,color:Colors.navCol}}>16 January - 20 January</Text>
                  </View>
                </View>
                <View style={MyTripStyleSheet.lowerCard}>
                  <TouchableOpacity style={MyTripStyleSheet.btn}>
                    <Text style={MyTripStyleSheet.btn.text}>Book Again</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{...MyTripStyleSheet.btn,borderLeftWidth:.3}}>
                    <Text style={MyTripStyleSheet.btn.text}>Need Help</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )})
          }
        </View>
      </ScrollView>
      <BottomNav navigation={navigation} route={route}/>
    </View>
  )
}

export default MyTripScreens
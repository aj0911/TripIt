import { View, Text, TouchableOpacity, Animated, Image, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import BottomNav from '../../Components/BottomNav'
import FavStyleSheet from './Fav.Style'
import HomeStyleSheet from '../HomeScreen/Home.Style'
import DrawerNav from '../../Components/DrawerNav'
import { Ionicons } from '@expo/vector-icons'
import Constants, { Data } from '../../Components/Constants'
import Colors from '../../assets/Colors'
import StarComponent from '../../Components/StarComponent'

const FavScreen = ({navigation,route}) => {
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
        <Text style={HomeStyleSheet.header.text}>Favorite</Text>
        <View></View>
      </View>
      <ScrollView style={{width:'100%'}}>
        <View style={FavStyleSheet.favCards}>
          {
            Data.slice(0,5).map((country,index)=>{
              const hotel = country.hotels[country.hotels.length-1];
              return (
              <TouchableOpacity onPress={()=>navigation.navigate('HotelDetails',{country:country.country,hotel})} style={FavStyleSheet.card} key={index}>
                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',gap:10}}>
                  <Image style={{height:100,width:100,borderRadius:10}} source={{uri:hotel.hotelImage}} />
                  <View style={FavStyleSheet.cardView}>
                    <Text style={{fontFamily:'Medium',fontSize:12,width:'80%'}}>{hotel.name}</Text>
                    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',gap:5}}>
                      <Ionicons name='location' color={Colors.navCol} size={15}/>
                      <Text style={{fontFamily:'Regular',fontSize:10,color:Colors.navCol}}>{country.country}</Text>
                    </View>
                    <StarComponent value={hotel.rating} size={12}/>
                  </View>
                </View>
                <Ionicons style={FavStyleSheet.heart} name='heart' size={15}/>
              </TouchableOpacity>
            )})
          }
        </View>
      </ScrollView>
      <BottomNav navigation={navigation} route={route}/>
    </View>
  )
}

export default FavScreen
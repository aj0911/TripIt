import { View, Text, TouchableOpacity, Animated, Image, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import BottomNav from '../../Components/BottomNav'
import HomeStyleSheet from '../HomeScreen/Home.Style'
import DrawerNav from '../../Components/DrawerNav'
import { Ionicons } from '@expo/vector-icons'
import Constants, { Data, topPlaces } from '../../Components/Constants'
import Colors from '../../assets/Colors'
import StarComponent from '../../Components/StarComponent'
import CountryStyleSheet from './Countries.Style'
import { useDispatch, useSelector } from 'react-redux'
import Toast from 'react-native-toast-message'
import { addFav } from '../../Reducers/FavReducer'

const TourDetails = ({navigation,route}) => {
  const [drawerOpen,setDrawerOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const startAnimation = ()=>{
      Animated.timing(animation,{
          toValue:drawerOpen?0:1,
          useNativeDriver:true,
          duration:300
      }).start();
  }
  const handleNavClick = (place)=>{
    Data.forEach(country=>{
        if(country.country===place)navigation.navigate('TourDetails',country)
    })
  }
  const dispatch = useDispatch();
  const authReducer = useSelector(state=>state.auth);
  const handleHeartClick = (hotel)=>{
    if(!authReducer.isAuth){
        Toast.show({
            type:'error',
            text1:'Warning',
            text2:'User not Signed Up',
            visibilityTime:3000
        });return;
    }
    dispatch(addFav({hotel,user:authReducer.user}))
    Toast.show({
        type:'success',
        text1:'Success',
        text2:'Hotel Added to Favorite List',
        visibilityTime:3000
    })
  }
  return (
    <View style={{...HomeStyleSheet.home,height:Constants.FULLVIEW_HEIGHT}}>
      <DrawerNav naviagation={navigation} startAnimation={startAnimation} animation={animation} setDrawerOpen={setDrawerOpen}/>
      <View style={HomeStyleSheet.header}>
        <TouchableOpacity onPress={()=>{setDrawerOpen(true);startAnimation()}}>
            <Ionicons size={25} name='menu-sharp'/>
        </TouchableOpacity>
        <Text style={HomeStyleSheet.header.text}>Tours</Text>
        <View></View>
      </View>
      <ScrollView style={{width:'100%'}}>
        <ScrollView horizontal>
            <View style={CountryStyleSheet.scrollCountry}>
                {
                    Object.keys(topPlaces).map((place,index)=>(
                        <TouchableOpacity onPress={()=>handleNavClick(place)} key={index} style={CountryStyleSheet.textView}>
                            <Text style={(route.params.country===place)?CountryStyleSheet.textView.activetext:CountryStyleSheet.textView.text}>{place}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </ScrollView>
        <View style={CountryStyleSheet.detailCards}>
            {
                route.params.hotels.map((hotel,index)=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('HotelDetails',{hotel,country:route.params.country})} key={index} style={CountryStyleSheet.detailCard}>
                        <Image style={{width:'100%',height:250}} source={{uri:hotel.hotelImage}}/>
                        <View style={CountryStyleSheet.detailCard.textView}>
                            <Text style={CountryStyleSheet.detailCard.textView.title}>{hotel.name}</Text>
                            <Text style={CountryStyleSheet.detailCard.textView.text}>{hotel.location}</Text>
                            <View style={{justifyContent:'space-between',alignItems:'center',width:'100%', flexDirection:'row'}}>
                                <StarComponent size={16} value={hotel.rating}/>
                                <Text style={CountryStyleSheet.detailCard.textView.text}>{hotel.rating} ({Math.round((hotel.rating*(index+1)*100))} Reviews)</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=>handleHeartClick(hotel)} style={CountryStyleSheet.detailCard.heart}><Ionicons  style={{backgroundColor:Colors.mainCol,padding:10,borderRadius:50}} color={Colors.bgCol} size={20} name='heart'/></TouchableOpacity>
                    </TouchableOpacity>
                ))
            }
        </View>
      </ScrollView>
      <BottomNav navigation={navigation} route={route}/>
    </View>
  )
}

export default TourDetails
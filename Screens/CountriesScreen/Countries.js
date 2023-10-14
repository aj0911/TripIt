import { View, Text, TouchableOpacity, Animated, ImageBackground } from 'react-native'
import React, { useRef, useState } from 'react'
import BottomNav from '../../Components/BottomNav'
import CountryStyleSheet from './Countries.Style'
import HomeStyleSheet from '../HomeScreen/Home.Style'
import DrawerNav from '../../Components/DrawerNav'
import { Ionicons } from '@expo/vector-icons'
import Constants, { Data, topPlaces } from '../../Components/Constants'
import { ScrollView } from 'react-native-gesture-handler'

const Countries = ({navigation,route}) => {
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
        <Text style={HomeStyleSheet.header.text}>Location</Text>
        <View></View>
      </View>
      <ScrollView style={{width:'100%'}}>
        <View style={CountryStyleSheet.countryCardView}>
          {
            Data.map((country,index)=>(
              <TouchableOpacity onPress={()=>navigation.navigate('TourDetails',country)} key={index} style={CountryStyleSheet.card}>
                <ImageBackground imageStyle={{opacity:.6,backgroundColor:'rgb(0,0,0)',}} style={CountryStyleSheet.cardImageView} source={{uri:country.countryImage}}>
                  <Text style={CountryStyleSheet.card.title}>{country.country}</Text>
                  <Text style={CountryStyleSheet.card.text}>{country.hotels[0].location}</Text>
                </ImageBackground>
              </TouchableOpacity>
            ))
          }
        </View>
      </ScrollView>
      <BottomNav navigation={navigation} route={route}/>
    </View>
  )
}

export default Countries
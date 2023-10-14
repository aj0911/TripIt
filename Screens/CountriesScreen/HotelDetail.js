import { View, Text, TouchableOpacity, Animated, Image, ScrollView, ImageBackground } from 'react-native'
import React, { useRef, useState } from 'react'
import BottomNav from '../../Components/BottomNav'
import HomeStyleSheet from '../HomeScreen/Home.Style'
import DrawerNav from '../../Components/DrawerNav'
import { Ionicons } from '@expo/vector-icons'
import Constants, { Data, topPlaces } from '../../Components/Constants'
import Colors from '../../assets/Colors'
import StarComponent from '../../Components/StarComponent'
import CountryStyleSheet from './Countries.Style'

const HotelDetail = ({navigation,route}) => {
  const [drawerOpen,setDrawerOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const startAnimation = ()=>{
      Animated.timing(animation,{
          toValue:drawerOpen?0:1,
          useNativeDriver:true,
          duration:300
      }).start();
  }
  const date = new Date(Date.now());

  return (
    <View style={{...HomeStyleSheet.home,height:Constants.FULLVIEW_HEIGHT}}>
      <DrawerNav naviagation={navigation} startAnimation={startAnimation} animation={animation} setDrawerOpen={setDrawerOpen}/>
      <View style={HomeStyleSheet.header}>
        <TouchableOpacity onPress={()=>{setDrawerOpen(true);startAnimation()}}>
            <Ionicons size={25} name='menu-sharp'/>
        </TouchableOpacity>
        <Text style={HomeStyleSheet.header.text}>{route.params.country}</Text>
        <View></View>
      </View>
      <ScrollView style={{width:'100%'}}>
        <ImageBackground style={{height:300,width:'100%',justifyContent:'center',alignItems:'center',gap:-10}} source={{uri:route.params.hotel.hotelImage}} imageStyle={{opacity:.7,backgroundColor:'rgb(0,0,0)'}}>
            <Text style={{width:'100%',textAlignVertical:'center',textAlign:'center',fontFamily:'Bold',fontSize:30,color:Colors.bgCol}}>{route.params.hotel.name}</Text>
            <Text style={{width:'100%',textAlignVertical:'center',textAlign:'center',fontFamily:'Medium',fontSize:14,color:Colors.bgCol}}>{route.params.hotel.location}</Text>
        </ImageBackground>
        <View>
            <Text>Welcome to {route.params.hotel.name}</Text>
            <Text>{'Deluxe Room - Spacious and elegantly furnished room with a king-size bed and stunning city views.\n- Rooftop Bar with Panoramic Views\nFitness Center with State-of-the-Art Equipment\nSpa and Wellness Center Offering Relaxing Treatments\nA wonderful stay! The staff was attentive and the room was immaculate.'}</Text>
            <Text>Images</Text>
            <ScrollView horizontal>
                <View style={{flexDirection:'row',width:'100%',gap:10}}>
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((e,i)=>(
                            <Image key={i} style={{width:100,height:100}} source={{uri:`https://source.unsplash.com/800x600/?hotel-room-${e}`}} />
                        ))
                    }
                </View>
            </ScrollView>
            <Text>Unparalleled Hospitality</Text>
            <Text>At {route.params.hotel.name}, we believe in the power of genuine hospitality. Our dedicated staff members are committed to ensuring every guest feels valued and cared for. From the moment you step through our doors, you'll be greeted with warmth and treated to a seamless and memorable stay.</Text>
            <Text>Sustainability and Community</Text>
            <Text>We take pride in our efforts to be environmentally responsible and contribute positively to the community. From eco-friendly practices to supporting local initiatives, we strive to make a meaningful impact beyond our walls.</Text>
            <Text>Discover {route.params.hotel.location}</Text>
            <Text>Situated in the heart of {route.params.hotel.location}, {route.params.hotel.name} Hotel provides easy access to Prominent Attractions of this location. Whether you're interested in cultural excursions, outdoor adventures, or simply unwinding in a peaceful environment, our hotel is the perfect starting point.</Text>
            <Text>Book Your Escape</Text>
            <Text>Experience the epitome of luxury and comfort at {route.params.hotel.name} Hotel. Book your stay today and let us be the backdrop to your unforgettable memories.</Text>
        </View>
      </ScrollView>
      <View style={{width:'100%'}}>
        <View style={CountryStyleSheet.bottom}>
            <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <TouchableOpacity>
                    <Text style={{fontFamily:'Medium',fontSize:14,color:Colors.navCol}}>Overview</Text>
                </TouchableOpacity>
                <TouchableOpacity><Text style={{fontFamily:'Medium',fontSize:14,color:Colors.navCol}}>Review</Text></TouchableOpacity>
            </View>
            <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <View style={{justifyContent:'center',alignItems:'flex-start',gap:5}}>
                    <Text style={{fontFamily:'Medium',fontSize:12}}>&#x20b9;1200 per person</Text>
                    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',gap:10}}>
                        <StarComponent size={12} value={route.params.hotel.rating}/>
                        <Text style={{fontFamily:'Medium',fontSize:12,color:Colors.navCol}}>{route.params.hotel.rating} (512 Reviews)</Text>
                    </View>
                </View>
                <TouchableOpacity style={{backgroundColor:Colors.mainCol,padding:10,borderRadius:50}}>
                    <Text style={{fontFamily:'Medium',fontSize:14,color:Colors.bgCol}}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
        <BottomNav navigation={navigation} route={route}/>
      </View>
    </View>
  )
}

export default HotelDetail
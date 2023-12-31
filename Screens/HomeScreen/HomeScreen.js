import { View, Text, Image, ScrollView, ImageBackground, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import HomeStyleSheet from './Home.Style'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Constants, { Data, testimonialsData, topPlaces } from '../../Components/Constants'
import Colors from '../../assets/Colors'
import StarComponent from '../../Components/StarComponent'
import BottomNav from '../../Components/BottomNav'
import DrawerNav from '../../Components/DrawerNav'

const HomeScreen = ({navigation,route}) => {
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
        <Text style={HomeStyleSheet.header.text}>Tours</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
            <Ionicons size={25} name='search'/>
        </TouchableOpacity>
      </View>
      <ScrollView style={{width:'100%'}}>
        <View style={HomeStyleSheet.textView}>
          <Text style={HomeStyleSheet.textView.title}>Popular Destination</Text>
          <Text style={HomeStyleSheet.textView.text}>{Data.length} Tours Available</Text>
        </View>
        <ScrollView horizontal>
          <View horizontal style={HomeStyleSheet.countriesView}>
              {
                  Data.map((country,index)=>(
                      <TouchableOpacity onPress={()=>navigation.navigate('TourDetails',country)} key={index} style={HomeStyleSheet.countryView}>
                          <Image style={{width: Constants.FULLVIEW_WIDTH/3, height: 100,objectFit:'cover'}} source={{uri:country.countryImage}}/>
                          <Text style={HomeStyleSheet.countryView.text}>{country.country}</Text>
                      </TouchableOpacity>
                  ))
              }
          </View>
        </ScrollView>
        <View style={{width:'100%',position:'relative'}}>
          <ImageBackground imageStyle={{opacity:.8,backgroundColor:'rgb(0,0,0)'}} style={HomeStyleSheet.banner} source={require('../../assets/Images/homeBanner.jpg')}>
            <Text style={HomeStyleSheet.banner.text}>Save upto 45%</Text>
            <Text style={HomeStyleSheet.banner.text}>NEW DELHI, INDIA</Text>
          </ImageBackground>
          <ScrollView style={{position:'absolute',bottom:30,left:0,width:'100%'}} horizontal>
            <View horizontal style={HomeStyleSheet.cardsView}>
                {
                    Data.map((country,index)=>(
                        <View key={index} style={HomeStyleSheet.cardView}>
                            <Text style={HomeStyleSheet.cardView.title}>Holidays</Text>
                            <Text style={HomeStyleSheet.cardView.text}>{`Say yes to ${country.hotels[0].name}, ${country.hotels[0].location}`}</Text>
                            <View style={HomeStyleSheet.cardView.box}>
                              <Text style={HomeStyleSheet.cardView.title}>Book your holiday package today</Text>
                              <TouchableOpacity onPress={()=>navigation.navigate('HotelDetails',{country:country.country,hotel:country.hotels[0]})}>
                                <Ionicons name='arrow-forward' color={Colors.bgCol} style={HomeStyleSheet.cardView.arrow}  size={20} />
                              </TouchableOpacity>
                            </View>
                        </View>
                    ))
                }
            </View>
          </ScrollView>
        </View>
        <View style={HomeStyleSheet.textView}>
          <Text style={HomeStyleSheet.textView.title}>Discover New Places</Text>
        </View>
        <ScrollView style={{marginTop:10,marginBottom:20}} horizontal>
          <View horizontal style={HomeStyleSheet.countriesView}>
              {
                  Data.reverse().map((country,index)=>(
                      <TouchableOpacity onPress={()=>navigation.navigate('TourDetails',country)} key={index} style={{...HomeStyleSheet.countryView,width:Constants.FULLVIEW_WIDTH/2.5}}>
                          <Image style={{width: Constants.FULLVIEW_WIDTH/2.5, height: 200,objectFit:'cover'}} source={{uri:country.hotels[country.hotels.length-1].hotelImage}}/>
                          <View style={{paddingLeft:10,paddingTop:10,width:'100%',justifyContent:'center',alignItems:'flex-start',gap:5}}>
                            <StarComponent value={country.hotels[0].rating} size={14}/>
                            <Text style={HomeStyleSheet.cardView.title}>{country.hotels[0].rating} ({Math.round((index+5)*country.hotels[0].rating*10)} Reviews)</Text>
                          </View>
                          <Text style={HomeStyleSheet.countryView.text}>{country.country}</Text>
                      </TouchableOpacity>
                  ))
              }
          </View>
        </ScrollView>
        <View style={HomeStyleSheet.textView}>
          <Text style={HomeStyleSheet.textView.title}>Our Latest Tour Places</Text>
        </View>
        <ScrollView style={{marginTop:10,marginBottom:20}} horizontal>
          <View horizontal style={HomeStyleSheet.countriesView}>
              {
                  Object.keys(topPlaces).map((place,index)=>(
                      <TouchableOpacity key={index} style={HomeStyleSheet.blogView}>
                          <Image style={{width: Constants.FULLVIEW_WIDTH/1.4 - 20, height: 150,objectFit:'cover',borderRadius:10}} source={{uri:topPlaces[place].image}}/>
                          <Text style={HomeStyleSheet.blogView.title}>{topPlaces[place].place}</Text>
                          <View style={HomeStyleSheet.blogView.boxView}>
                            <Text style={HomeStyleSheet.blogView.text}>{place}</Text>
                            <Text style={HomeStyleSheet.blogView.text}>10 Oct 2023</Text>
                          </View>
                          <Ionicons style={{position:'absolute',
                            top:140,
                            right:20,
                            color:Colors.bgCol,
                            backgroundColor:Colors.mainCol,
                            padding:5,
                            borderRadius:30}} name='heart' size={25}/>
                          <Text style={HomeStyleSheet.blogView.text}>{topPlaces[place].review}</Text>
                      </TouchableOpacity>
                  ))
              }
          </View>
          {/* for Designing */}
          <View style={{position:'absolute',top:'30%',right:0,width:'95%',height:'70%',backgroundColor:Colors.mainCol,zIndex:-5,borderRadius:20}}>
            <View style={{position:'absolute',bottom:10,left:10,flexDirection:'row',gap:10,alignItems:'center'}}>
              <View style={{backgroundColor:Colors.bgCol,borderRadius:20,width:50,height:20}}></View>
              <View style={{backgroundColor:Colors.bgCol,borderRadius:20,width:20,height:20}}></View>
              <View style={{backgroundColor:Colors.bgCol,borderRadius:20,width:20,height:20}}></View>
              <View style={{backgroundColor:Colors.bgCol,borderRadius:20,width:20,height:20}}></View>
            </View>
            <View style={{position:'absolute',bottom:10,right:10,flexDirection:'row',gap:10,alignItems:'center'}}>
              <View style={{backgroundColor:Colors.bgCol,borderRadius:20,width:20,height:20}}></View>
              <View style={{backgroundColor:Colors.bgCol,borderRadius:20,width:20,height:20}}></View>
              <View style={{backgroundColor:Colors.bgCol,borderRadius:20,width:20,height:20}}></View>
              <View style={{backgroundColor:Colors.bgCol,borderRadius:20,width:50,height:20}}></View>
            </View>
          </View>
        </ScrollView>
        <View style={HomeStyleSheet.textView}>
          <Text style={HomeStyleSheet.textView.title}>People Also Search</Text>
        </View>
        <View horizontal style={HomeStyleSheet.searchView}>
            {
                Data.slice(0,5).map((country,index)=>{
                  const hotel = country.hotels[Math.floor(country.hotels.length/2)];
                  return (
                    <View key={index} style={HomeStyleSheet.searchViewCard}>
                        <Image style={{width: '35%', height: 100,objectFit:'cover',borderRadius:10}} source={{uri:hotel.hotelImage}}/>
                        <View style={HomeStyleSheet.searchViewCard.left}>
                          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
                            <Text style={HomeStyleSheet.searchViewCard.title}>{hotel.name}</Text>
                            <Text style={HomeStyleSheet.searchViewCard.title}>{country.country}</Text>
                          </View>
                          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%',marginTop:10}}>
                            <StarComponent value={hotel.rating} size={14}/>
                            <Text style={HomeStyleSheet.searchViewCard.text}>{hotel.rating} ({Math.round((index+5)*hotel.rating*10)} Reviews)</Text>
                          </View>
                          <TouchableOpacity onPress={()=>navigation.navigate('HotelDetails',{country:country.country,hotel})}>
                            <Text style={{fontFamily:'Medium',fontSize:12,marginTop:10,color:Colors.secCol}}>Show More</Text>
                          </TouchableOpacity>
                        </View>
                    </View>
                )})
            }
        </View>
        <View style={HomeStyleSheet.textView}>
          <Text style={HomeStyleSheet.textView.title}>What People's Say</Text>
        </View>
        <View horizontal style={{marginTop:10,marginBottom:20,width:'100%',flexDirection:'row',gap:10,paddingLeft:20,paddingRight:20}}>
            {
                testimonialsData.map((client,index)=>{
                  return (
                    <View key={index} style={{width:'33%',justifyContent:'flex-start',alignItems:'center',gap:10}}>
                        <Image style={{width: 100, height: 100,objectFit:'contain',borderRadius:50}} source={{uri:client.avatarUrl}}/>
                        <Text style={{fontFamily:'Bold',fontSize:12,textAlign:'center',textAlignVertical:'center'}}>{client.name}</Text>
                        <Text style={{fontFamily:'Medium',fontSize:10,color:Colors.navCol,textAlign:'justify',textAlignVertical:'center'}}>{client.review}</Text>
                    </View>
                )})
            }
        </View>
      </ScrollView>
      <BottomNav navigation={navigation} route={route}/>
    </View>
  )
}

export default HomeScreen
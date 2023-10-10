import { View, Text, Image, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import HomeStyleSheet from './Home.Style'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Constants, { Data } from '../../Components/Constants'
import Colors from '../../assets/Colors'
import StarComponent from '../../Components/StarComponent'

const HomeScreen = ({navigation}) => {
  return (
    <View style={HomeStyleSheet.home}>
      <View style={HomeStyleSheet.header}>
        <TouchableOpacity>
            <Ionicons size={25} name='menu-sharp'/>
        </TouchableOpacity>
        <Text style={HomeStyleSheet.header.text}>Tours</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
            <Ionicons size={25} name='search'/>
        </TouchableOpacity>
      </View>
      <View style={HomeStyleSheet.textView}>
        <Text style={HomeStyleSheet.textView.title}>Popular Destination</Text>
        <Text style={HomeStyleSheet.textView.text}>{Data.length} Tours Available</Text>
      </View>
      <ScrollView horizontal>
        <View horizontal style={HomeStyleSheet.countriesView}>
            {
                Data.map((country,index)=>(
                    <TouchableOpacity key={index} style={HomeStyleSheet.countryView}>
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
                            <TouchableOpacity>
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
                    <TouchableOpacity key={index} style={{...HomeStyleSheet.countryView,width:Constants.FULLVIEW_WIDTH/2.5}}>
                        <Image style={{width: Constants.FULLVIEW_WIDTH/2.5, height: 250,objectFit:'cover'}} source={{uri:country.hotels[country.hotels.length-1].hotelImage}}/>
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
        <Text style={HomeStyleSheet.textView.title}>Our Latest Blog Category</Text>
      </View>
      <ScrollView style={{marginTop:10,marginBottom:20}} horizontal>
        <View horizontal style={HomeStyleSheet.countriesView}>
            {
                Data.reverse().map((country,index)=>(
                    <TouchableOpacity key={index} style={{...HomeStyleSheet.countryView,width:Constants.FULLVIEW_WIDTH/2.5}}>
                        <Image style={{width: Constants.FULLVIEW_WIDTH/2.5, height: 250,objectFit:'cover'}} source={{uri:country.hotels[country.hotels.length-1].hotelImage}}/>
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
    </View>
  )
}

export default HomeScreen
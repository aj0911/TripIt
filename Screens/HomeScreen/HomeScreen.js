import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import HomeStyleSheet from './Home.Style'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Constants, { Data } from '../../Components/Constants'

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
                    <View key={index} style={HomeStyleSheet.countryView}>
                        <Image style={{width: Constants.FULLVIEW_WIDTH/3, height: 100,objectFit:'cover'}} source={{uri:country.countryImage}}/>
                        <Text style={HomeStyleSheet.countryView.text}>{country.country}</Text>
                    </View>
                ))
            }
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen
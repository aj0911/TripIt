import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import AuthStyleSheet from '../AuthenticationScreen/AuthScreen.Style'
import IntroStyleSheet from '../IntroScreen/Intro.Style'
import Colors from '../../assets/Colors'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const SearchScreen = () => {
  return (
    <LinearGradient style={AuthStyleSheet.mainView} colors={[Colors.mainCol,Colors.secCol]}>
        <View style={{...IntroStyleSheet.logo,marginTop:'20%'}}>
          <Image style={{height:100,width:100,objectFit:'cover'}} source={require('../../assets/Images/Logo-whiteCol.png') }/>
          <Text style={{...IntroStyleSheet.logo.text,color:Colors.bgCol}}>Trip<Text style={{color:Colors.bgCol}}>IT</Text></Text>
          <Text/>
        </View>
        <View style={AuthStyleSheet.boxView}>
          <View style={AuthStyleSheet.sideDummyView}/>
          <View style={{...AuthStyleSheet.sideDummyView,borderRadius:20,top:'-10%',width:'95%'}}/>
          <Text style={AuthStyleSheet.boxView.title}>Search</Text>
          <TextInput placeholder='Type Your Text' style={AuthStyleSheet.boxView.textInput}/>
          <TouchableOpacity style={AuthStyleSheet.boxView.btn}>
              <Text style={AuthStyleSheet.boxView.btn.text}>Search</Text>
              <Ionicons name='arrow-forward' size={20} color={Colors.bgCol} style={{backgroundColor:Colors.mainColLight,borderRadius:35,padding:10}}/>
          </TouchableOpacity>
        </View>
        <View style={AuthStyleSheet.downView}/>
    </LinearGradient>
  )
}

export default SearchScreen
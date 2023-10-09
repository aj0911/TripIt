import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import Colors from '../../assets/Colors'
import Constants from '../../Components/Constants';
import AuthStyleSheet from './AuthScreen.Style';
import IntroStyleSheet from '../IntroScreen/Intro.Style';

const AuthScreen = () => {
  return (
    <LinearGradient style={AuthStyleSheet.mainView} colors={[Colors.mainCol,Colors.secCol]}>
        <View style={{...IntroStyleSheet.logo,marginTop:'20%'}}>
          <Image style={{height:100,width:100,objectFit:'cover'}} source={require('../../assets/Images/Logo-whiteCol.png') }/>
          <Text style={{...IntroStyleSheet.logo.text,color:Colors.bgCol}}>Trip<Text style={{color:Colors.bgCol}}>IT</Text></Text>
          <Text/>
        </View>
    </LinearGradient>
  )
}

export default AuthScreen
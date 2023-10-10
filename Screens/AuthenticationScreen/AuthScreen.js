import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import Colors from '../../assets/Colors'
import AuthStyleSheet from './AuthScreen.Style';
import IntroStyleSheet from '../IntroScreen/Intro.Style';
import Login from './Login';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from '../../Components/Constants';

const AuthScreen = ({navigation,route}) => {

  const [name,setName] = useState(Constants.LOGIN_SCREEN);
  return (
    <LinearGradient style={AuthStyleSheet.mainView} colors={[Colors.mainCol,Colors.secCol]}>
        <View style={{...IntroStyleSheet.logo,marginTop:'20%'}}>
          <Image style={{height:100,width:100,objectFit:'cover'}} source={require('../../assets/Images/Logo-whiteCol.png') }/>
          <Text style={{...IntroStyleSheet.logo.text,color:Colors.bgCol}}>Trip<Text style={{color:Colors.bgCol}}>IT</Text></Text>
          <Text/>
        </View>
        <Login name={name} navigation={navigation} setName={setName}/>
        <View style={AuthStyleSheet.downView}>
          {
            (name===Constants.REGISTER_SCREEN || name === Constants.LOGIN_SCREEN)?
            <View style={AuthStyleSheet.downView.btns}>
              <TouchableOpacity>
                <Ionicons name='logo-facebook' style={{borderWidth:1,borderColor:Colors.bgCol,padding:10,borderRadius:30,textAlign:'center',textAlignVertical:'center'}} color={Colors.bgCol} size={25} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name='logo-google' style={{borderWidth:1,borderColor:Colors.bgCol,padding:10,borderRadius:30,textAlign:'center',textAlignVertical:'center'}} color={Colors.bgCol} size={25} />
              </TouchableOpacity>
            </View>:''
          }
          {
            (name===Constants.REGISTER_SCREEN)?
            <TouchableOpacity onPress={()=>setName(Constants.LOGIN_SCREEN)}>
              <Text style={AuthStyleSheet.downView.text}>Already have an account? Sign In</Text>
            </TouchableOpacity>
            :
            (name===Constants.LOGIN_SCREEN)?
            <TouchableOpacity onPress={()=>setName(Constants.REGISTER_SCREEN)}>
              <Text style={AuthStyleSheet.downView.text}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>:
            (name===Constants.FORGOT_SCREEN)?
            <TouchableOpacity onPress={()=>setName(Constants.REGISTER_SCREEN)}>
              <Text style={AuthStyleSheet.downView.text}>Having trouble? Get Help</Text>
            </TouchableOpacity>
            :''
          }
        </View>
    </LinearGradient>
  )
}

export default AuthScreen
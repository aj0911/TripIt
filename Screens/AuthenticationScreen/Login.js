import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import AuthStyleSheet from './AuthScreen.Style'
import { TextInput } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../assets/Colors'
import Constants from '../../Components/Constants'
import Checkbox from 'expo-checkbox';

const Login = ({name,setName,navigation}) => {
    const [isChecked,setIsChecked] = useState(false);
    const pinRef = {
        first:useRef(null),
        sec:useRef(null),
        third:useRef(null),
        fourth:useRef(null),
    }

    const [pinVal,setPinVal] = useState({});

    const handleForgot = ()=>{
        setName(Constants.VERIFY_SCREEN);
    }

    const handleVerify =()=>{
        const otp = `${pinVal.first}${pinVal.sec}${pinVal.third}${pinVal.fourth}`;
        navigation.navigate('Home');
    }
    const handleLogin =()=>{
        setName(Constants.VERIFY_SCREEN)
    }

    if(name===Constants.LOGIN_SCREEN){
     return (<View style={AuthStyleSheet.boxView}>
        <View style={AuthStyleSheet.sideDummyView}/>
        <View style={{...AuthStyleSheet.sideDummyView,borderRadius:20,top:'-10%',width:'95%'}}/>
        <Text style={AuthStyleSheet.boxView.title}>Sign In</Text>
        <TextInput inputMode='email' placeholder='Email' style={AuthStyleSheet.boxView.textInput}/>
        <TextInput secureTextEntry placeholder='Password' style={AuthStyleSheet.boxView.textInput}/>
        <TouchableOpacity onPress={()=>setName(Constants.FORGOT_SCREEN)} style={{alignSelf:'flex-end'}}>
            <Text style={AuthStyleSheet.boxView.text}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin} style={AuthStyleSheet.boxView.btn}>
            <Text style={AuthStyleSheet.boxView.btn.text}>Sign In</Text>
            <Ionicons name='arrow-forward' size={20} color={Colors.bgCol} style={{backgroundColor:Colors.mainColLight,borderRadius:35,padding:10}}/>
        </TouchableOpacity>
    </View>)
    }
    else if(name===Constants.REGISTER_SCREEN){
    return (
        <View style={AuthStyleSheet.boxView}>
            <View style={AuthStyleSheet.sideDummyView}/>
            <View style={{...AuthStyleSheet.sideDummyView,borderRadius:20,top:'-10%',width:'95%'}}/>
            <Text style={AuthStyleSheet.boxView.title}>Sign Up</Text>
            <TextInput placeholder='Name' style={AuthStyleSheet.boxView.textInput}/>
            <TextInput inputMode='email' placeholder='Email' style={AuthStyleSheet.boxView.textInput}/>
            <TextInput secureTextEntry placeholder='Password' style={AuthStyleSheet.boxView.textInput}/>
            <TextInput inputMode='tel' placeholder='Phone Number' style={AuthStyleSheet.boxView.textInput}/>
            <TouchableOpacity onPress={()=>setIsChecked(!isChecked)} style={AuthStyleSheet.checkboxView}>
                <Checkbox color={Colors.mainCol} style={{width:15,height:15}} value={isChecked}/>
                <Text style={AuthStyleSheet.checkboxView.text}>I agree the <Text style={{color:Colors.mainCol}}>Terms & Conditions</Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={AuthStyleSheet.boxView.btn}>
                <Text style={AuthStyleSheet.boxView.btn.text}>Sign Up</Text>
                <Ionicons name='arrow-forward' size={20} color={Colors.bgCol} style={{backgroundColor:Colors.mainColLight,borderRadius:35,padding:10}}/>
            </TouchableOpacity>
        </View>
        )
    }
    else if(name===Constants.FORGOT_SCREEN){
        return (
        <View style={AuthStyleSheet.boxView}>
            <View style={AuthStyleSheet.sideDummyView}/>
            <View style={{...AuthStyleSheet.sideDummyView,borderRadius:20,top:'-10%',width:'95%'}}/>
            <Text style={AuthStyleSheet.boxView.title}>Forgot Password?</Text>
            <TextInput inputMode='email' placeholder='Enter Email Address' style={AuthStyleSheet.boxView.textInput}/>
            <TouchableOpacity onPress={()=>setName(Constants.REGISTER_SCREEN)} >
                <Text style={{...AuthStyleSheet.boxView.text,color:'black'}}>Don't have an account?<Text style={{color:Colors.mainCol,fontFamily:'Medium'}}> Register Now</Text></Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleForgot} style={AuthStyleSheet.boxView.btn}>
                <Text style={AuthStyleSheet.boxView.btn.text}>Forgot</Text>
                <Ionicons name='arrow-forward' size={20} color={Colors.bgCol} style={{backgroundColor:Colors.mainColLight,borderRadius:35,padding:10}}/>
            </TouchableOpacity>
        </View>
        )
    }
    else if(name===Constants.VERIFY_SCREEN){
        return (
        <View style={AuthStyleSheet.boxView}>
            <View style={AuthStyleSheet.sideDummyView}/>
            <View style={{...AuthStyleSheet.sideDummyView,borderRadius:20,top:'-10%',width:'95%'}}/>
            <Text style={AuthStyleSheet.boxView.title}>Verification</Text>
            <Text style={AuthStyleSheet.titleText}>Enter Code Here</Text>
            <View style={AuthStyleSheet.inputView}>
                <TextInput inputMode='numeric' ref={pinRef.first}  maxLength={1} style={AuthStyleSheet.inputView.textInput} onChange={()=>{
                    if(!pinVal.first)pinRef.sec.current.focus()
                }} onChangeText={Text=>setPinVal({...pinVal,first:Text})}/>
                <TextInput inputMode='numeric' maxLength={1} ref={pinRef.sec} style={AuthStyleSheet.inputView.textInput} onChange={()=>{
                    if(!pinVal.sec)pinRef.third.current.focus()
                }} onChangeText={Text=>setPinVal({...pinVal,sec:Text})}/>
                <TextInput inputMode='numeric' maxLength={1} ref={pinRef.third} style={AuthStyleSheet.inputView.textInput} onChange={()=>{
                    if(!pinVal.third)pinRef.fourth.current.focus()
                }} onChangeText={Text=>setPinVal({...pinVal,third:Text})}/>
                <TextInput inputMode='numeric' maxLength={1} ref={pinRef.fourth} style={AuthStyleSheet.inputView.textInput} onChangeText={Text=>setPinVal({...pinVal,fourth:Text})}/>
            </View>
            <TouchableOpacity >
                <Text style={{...AuthStyleSheet.boxView.text,color:'black'}}>If you didn't recieve the code?<Text style={{color:Colors.mainCol,fontFamily:'Medium'}}> Resend</Text></Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleVerify} style={AuthStyleSheet.boxView.btn}>
                <Text style={AuthStyleSheet.boxView.btn.text}>Verify</Text>
                <Ionicons name='arrow-forward' size={20} color={Colors.bgCol} style={{backgroundColor:Colors.mainColLight,borderRadius:35,padding:10}}/>
            </TouchableOpacity>
        </View>
        )
    }
}

export default Login
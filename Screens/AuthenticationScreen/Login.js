import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React, { useRef, useState } from 'react'
import AuthStyleSheet from './AuthScreen.Style'
import { TextInput } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../assets/Colors'
import Constants from '../../Components/Constants'
import Checkbox from 'expo-checkbox';
import Toast from 'react-native-toast-message'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useDispatch, useSelector } from 'react-redux'
import generateOtp from '../../Components/GenerateOTP'
import SecuredData from '../../SecuredData'

const Login = ({name,setName,navigation,setLoader}) => {
    const pinRef = {
        first:useRef(null),
        sec:useRef(null),
        third:useRef(null),
        fourth:useRef(null),
    }
    const dispatch = useDispatch();
    const [loginCredentials,setLoginCredentials] = useState({email:'',password:''});
    const [registerCredentials,setRegisterCredentials] = useState({name:'',email:'',password:'',phoneNumber:'',isAgree:false});
    const [pinVal,setPinVal] = useState({});
    const [genOtp,setGenOtp] = useState('');
    const handleForgot = ()=>{
        setName(Constants.VERIFY_SCREEN);
    }

    const handleVerify =()=>{
        const otp = `${pinVal.first}${pinVal.sec}${pinVal.third}${pinVal.fourth}`;
        navigation.navigate('Home');
    }

    const handleLogin =()=>{
        if(loginCredentials.email === '' || loginCredentials.password === '' ){
            Toast.show({
                text1:'Error',
                text2: `Both the fields must be required to login`,
                visibilityTime:3000,
                autoHide:true,
                type:'error'
            })  
        }
        else{
            if(loginCredentials.email.includes('@') && loginCredentials.email.includes('.com')){
                setLoader(true);
                signInWithEmailAndPassword(auth,loginCredentials.email,loginCredentials.password).then((res)=>{
                    Toast.show({
                        text1:'Success',
                        text2: `Login Successfully`,
                        visibilityTime:3000,
                        autoHide:true,
                        type:'success'
                    });
                    dispatch({type:'login',payload:{
                        email:res.user.email,
                        name:res.user.displayName,
                        phone:res.user.phoneNumber,
                        img:res.user.photoURL
                    }})
                    navigation.navigate('Home');
                }).catch((err)=>{
                    Toast.show({
                        text1:'Error',
                        text2: `${err}`,
                        visibilityTime:3000,
                        autoHide:true,
                        type:'error'
                    }) 
                }).finally(()=>{
                    setLoader(false);
                })
            }
            else{
                Toast.show({
                    text1:'Error',
                    text2: `Email must be in correct format`,
                    visibilityTime:3000,
                    autoHide:true,
                    type:'error'
                }) 
            }
        }
    }

    const handleRegister = ()=>{
        if(registerCredentials.email === '' || registerCredentials.password === '' || registerCredentials.name==='' || !registerCredentials.isAgree || registerCredentials.phoneNumber===''){
            Toast.show({
                text1:'Error',
                text2: `The fields must be required to login`,
                visibilityTime:3000,
                autoHide:true,
                type:'error'
            })  
        }
        else{
            if(registerCredentials.email.includes('@') && registerCredentials.email.includes('.com')){
                setLoader(true);
                const crack = generateOtp(6);
            }
            else{
                Toast.show({
                    text1:'Error',
                    text2: `Email must be in correct format`,
                    visibilityTime:3000,
                    autoHide:true,
                    type:'error'
                }) 
            }
        }
    }

    if(name===Constants.LOGIN_SCREEN){
     return (
     <View style={AuthStyleSheet.boxView}>
        <View style={AuthStyleSheet.sideDummyView}/>
        <View style={{...AuthStyleSheet.sideDummyView,borderRadius:20,top:'-10%',width:'95%'}}/>
        <Text style={AuthStyleSheet.boxView.title}>Sign In</Text>
        <TextInput onChangeText={Text=>setLoginCredentials({...loginCredentials,email:Text})} inputMode='email' placeholder='Email' style={AuthStyleSheet.boxView.textInput}/>
        <TextInput onChangeText={Text=>setLoginCredentials({...loginCredentials,password:Text})} secureTextEntry placeholder='Password' style={AuthStyleSheet.boxView.textInput}/>
        <TouchableOpacity onPress={()=>setName(Constants.FORGOT_SCREEN)} style={{alignSelf:'flex-end'}}>
            <Text style={AuthStyleSheet.boxView.text}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin} style={AuthStyleSheet.boxView.btn}>
            <Text style={AuthStyleSheet.boxView.btn.text}>Sign In</Text>
            <Ionicons name='arrow-forward' size={20} color={Colors.bgCol} style={{backgroundColor:Colors.mainColLight,borderRadius:35,padding:10}}/>
        </TouchableOpacity>
    </View>
    )}
    else if(name===Constants.REGISTER_SCREEN){
    return (
        <View style={AuthStyleSheet.boxView}>
            <View style={AuthStyleSheet.sideDummyView}/>
            <View style={{...AuthStyleSheet.sideDummyView,borderRadius:20,top:'-10%',width:'95%'}}/>
            <Text style={AuthStyleSheet.boxView.title}>Sign Up</Text>
            <TextInput onChangeText={Text=>setRegisterCredentials({...registerCredentials,name:Text})} placeholder='Name' style={AuthStyleSheet.boxView.textInput}/>
            <TextInput onChangeText={Text=>setRegisterCredentials({...registerCredentials,email:Text})} inputMode='email' placeholder='Email' style={AuthStyleSheet.boxView.textInput}/>
            <TextInput onChangeText={Text=>setRegisterCredentials({...registerCredentials,password:Text})} secureTextEntry placeholder='Password' style={AuthStyleSheet.boxView.textInput}/>
            <TextInput onChangeText={Text=>setRegisterCredentials({...registerCredentials,phoneNumber:Text})} inputMode='tel' placeholder='Phone Number' style={AuthStyleSheet.boxView.textInput}/>
            <TouchableOpacity onPress={()=>setRegisterCredentials({...registerCredentials,isAgree:(!registerCredentials.isAgree)})} style={AuthStyleSheet.checkboxView}>
                <Checkbox color={Colors.mainCol} style={{width:15,height:15}} value={registerCredentials.isAgree}/>
                <Text style={AuthStyleSheet.checkboxView.text}>I agree the <Text style={{color:Colors.mainCol}}>Terms & Conditions</Text></Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRegister} style={AuthStyleSheet.boxView.btn}>
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
import { View, Text, TouchableOpacity, Touchable } from 'react-native'
import React, { useState } from 'react'
import BookingStyleSheet from './Booking.Style'
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AuthStyleSheet from '../AuthenticationScreen/AuthScreen.Style'
import Colors from '../../assets/Colors'
import Constants from '../../Components/Constants'
import { useSelector } from 'react-redux'
import LoginWarning from '../AditionalScreens/LoginWarning'
import Toast from 'react-native-toast-message'

const Booking = ({navigation,route}) => {
  const authReducer = useSelector(state=>state.auth);
  const [isDatePickerVisible,setIsDatePickerVisible] = useState(false);
  const [startTour,setStartTour] = useState('');
  const [endTour,setEndTour] = useState('');
  const [allDetails,setAllDetails] = useState({name:(authReducer.isAuth)?authReducer.user.name:'',email:(authReducer.isAuth)?authReducer.user.email:'',address:'',phone:'',adult:'',child:''});
  const [isStart,setIsStart] = useState(null);

  const handleConfirm  = (date)=>{
    if(isStart){
      setStartTour(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`);
    }
    else {
      setEndTour(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`);
    }
    setIsDatePickerVisible(false);
  }

  const handleNext = ()=>{
    const data = {...allDetails,startTour,endTour};
    if(data.name==='' || data.email==='' || data.endTour==='' || data.startTour==='' || data.address==='' || data.phone === '' || data.adult === '' || data.child === ''){
      Toast.show({
        type:'error',
        text1:'Warning',
        text2:'All the fields are mandatory',
        visibilityTime:3000
      })
    }
    else{
      if(data.email.includes('@') && data.email.includes('.com')){
        navigation.navigate('BookingDetails',{...data,...route.params});
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

  return (
    (authReducer.isAuth)?
    <View style={{backgroundColor:Colors.bgCol,minHeight:Constants.FULLVIEW_HEIGHT}}>
      <View style={BookingStyleSheet.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}><Ionicons name='arrow-back' size={30}/></TouchableOpacity>
        <Text style={BookingStyleSheet.header.text}>Booking Now</Text>
        <View></View>
      </View>
      <View style={BookingStyleSheet.form}>
        <TextInput onChangeText={Text=>setAllDetails({...allDetails,name:Text})} style={BookingStyleSheet.form.textInput} value={allDetails.name} placeholder='Name'/>
        <TextInput onChangeText={Text=>setAllDetails({...allDetails,email:Text})} inputMode='email' value={allDetails.email} style={BookingStyleSheet.form.textInput} placeholder='Email ID'/>
        <TextInput onChangeText={Text=>setAllDetails({...allDetails,phone:Text})} inputMode='numeric' style={BookingStyleSheet.form.textInput} placeholder='Contact Number'/>
        <TextInput onChangeText={Text=>setAllDetails({...allDetails,address:Text})} style={BookingStyleSheet.form.textInput} multiline placeholder='Address'/>
        <Text style={BookingStyleSheet.form.text}>Date and Time</Text>
        <TouchableOpacity style={{width:'100%'}} onPress={()=>{setIsDatePickerVisible(true);setIsStart(true)}}>
          <Text style={BookingStyleSheet.form.textInput}>{(startTour==='')?'Start Tour':startTour}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'100%'}} onPress={()=>{setIsDatePickerVisible(true);setIsStart(false)}}>
          <Text style={BookingStyleSheet.form.textInput}>{(endTour==='')?'End Tour':endTour}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={()=>setIsDatePickerVisible(false)}
        />
        <Text style={BookingStyleSheet.form.text}>Members</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',gap:10,overflow:'hidden',width:'100%'}}>
          <TextInput onChangeText={Text=>setAllDetails({...allDetails,adult:Text})} inputMode='numeric' style={{...BookingStyleSheet.form.textInput,width:'50%'}} placeholder='Adult'/>
          <TextInput onChangeText={Text=>setAllDetails({...allDetails,child:Text})} inputMode='numeric' style={{...BookingStyleSheet.form.textInput,width:'50%'}} placeholder='Child'/>
        </View>
        <TouchableOpacity onPress={handleNext} style={AuthStyleSheet.boxView.btn}>
              <Text style={AuthStyleSheet.boxView.btn.text}>Continue</Text>
              <Ionicons name='arrow-forward' size={20} color={Colors.bgCol} style={{backgroundColor:Colors.mainColLight,borderRadius:35,padding:10}}/>
        </TouchableOpacity>
      </View>
    </View>:
    <LoginWarning navigation={navigation}/>
  )
}

export default Booking
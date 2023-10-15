import { View, Text, TouchableOpacity, Touchable } from 'react-native'
import React, { useState } from 'react'
import BookingStyleSheet from './Booking.Style'
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AuthStyleSheet from '../AuthenticationScreen/AuthScreen.Style'
import Colors from '../../assets/Colors'
import Constants from '../../Components/Constants'

const Booking = ({navigation}) => {
  const [isDatePickerVisible,setIsDatePickerVisible] = useState(false);
  const [startTour,setStartTour] = useState('');
  const [endTour,setEndTour] = useState('');
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
  return (
    <View style={{backgroundColor:Colors.bgCol,minHeight:Constants.FULLVIEW_HEIGHT}}>
      <View style={BookingStyleSheet.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}><Ionicons name='arrow-back' size={30}/></TouchableOpacity>
        <Text style={BookingStyleSheet.header.text}>Booking Now</Text>
        <View></View>
      </View>
      <View style={BookingStyleSheet.form}>
        <TextInput style={BookingStyleSheet.form.textInput} placeholder='First Name'/>
        <TextInput style={BookingStyleSheet.form.textInput} placeholder='Last Name'/>
        <TextInput inputMode='email' style={BookingStyleSheet.form.textInput} placeholder='Email ID'/>
        <TextInput inputMode='numeric' style={BookingStyleSheet.form.textInput} placeholder='Contact Number'/>
        <TextInput  style={BookingStyleSheet.form.textInput} multiline placeholder='Address'/>
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
          <TextInput inputMode='numeric' style={{...BookingStyleSheet.form.textInput,width:'50%'}} placeholder='Adult'/>
          <TextInput inputMode='numeric' style={{...BookingStyleSheet.form.textInput,width:'50%'}} placeholder='Child'/>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('BookingDetails')} style={AuthStyleSheet.boxView.btn}>
              <Text style={AuthStyleSheet.boxView.btn.text}>Continue</Text>
              <Ionicons name='arrow-forward' size={20} color={Colors.bgCol} style={{backgroundColor:Colors.mainColLight,borderRadius:35,padding:10}}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Booking
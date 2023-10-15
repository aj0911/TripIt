import { View, Text } from 'react-native'
import React, { useState } from 'react'
import BookingStyleSheet from './Booking.Style';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import AuthStyleSheet from '../AuthenticationScreen/AuthScreen.Style'
import Colors from '../../assets/Colors'
import Constants from '../../Components/Constants';

const BookingDetails = ({navigation}) => {
    const [adult,setAdult] = useState(3);
    const [child,setChild] = useState(4);
  return (
    <View style={{backgroundColor:Colors.bgCol,justifyContent:'flex-start',alignItems:'center',minHeight:Constants.FULLVIEW_HEIGHT}}>
        <View style={BookingStyleSheet.header}>
            <TouchableOpacity onPress={()=>navigation.goBack()}><Ionicons name='arrow-back' size={30}/></TouchableOpacity>
            <Text style={BookingStyleSheet.header.text}>Booking Details</Text>
            <View></View>
        </View>
        <View style={{width:'100%',overflow:'hidden',padding:20,justifyContent:'center',alignItems:'center',gap:20}}>
            <View style={BookingStyleSheet.bookingCard}>
                <Text style={BookingStyleSheet.bookingCard.title}>Booking For</Text>
                <Text style={{width:'100%',...BookingStyleSheet.bookingCard.text}}>Virat Kohli, +918723884342</Text>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'flex-start',alignItems:'center',gap:20}}>
                    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',gap:5}}>
                        <Text style={BookingStyleSheet.bookingCard.text}>Adult</Text>
                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',gap:5}}>
                            {
                                (adult<1)?'':
                                <TouchableOpacity style={{borderRadius:50,borderColor:Colors.navCol,borderWidth:.5,textAlign:'center',textAlignVertical:'center'}} onPress={()=>setAdult(adult-1)}><Ionicons size={20} name='remove'/></TouchableOpacity>
                            }
                            <Text style={{padding:5,fontFamily:'Medium',fontSize:14,color:Colors.mainCol}}>{adult}</Text>
                            <TouchableOpacity style={{borderRadius:50,borderColor:Colors.navCol,borderWidth:.5,textAlign:'center',textAlignVertical:'center'}} onPress={()=>setAdult(adult+1)}><Ionicons size={20} name='add'/></TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',gap:5}}>
                        <Text style={BookingStyleSheet.bookingCard.text}>Child</Text>
                        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',gap:5}}>
                            {
                                (child<1)?'':
                                <TouchableOpacity style={{borderRadius:50,borderColor:Colors.navCol,borderWidth:.5,textAlign:'center',textAlignVertical:'center'}} onPress={()=>setChild(child-1)}><Ionicons size={20} name='remove'/></TouchableOpacity>
                            }
                            <Text style={{padding:5,fontFamily:'Medium',fontSize:14,color:Colors.mainCol}}>{child}</Text>
                            <TouchableOpacity style={{borderRadius:50,borderColor:Colors.navCol,borderWidth:.5,textAlign:'center',textAlignVertical:'center'}} onPress={()=>setChild(child+1)}><Ionicons size={20} name='add'/></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style = {{...BookingStyleSheet.bookingCard,gap:10}}>
                <Text style={BookingStyleSheet.bookingCard.title}>Apply Promo Code</Text>
                <View style={BookingStyleSheet.bookingCard.promo}>
                    <TextInput style={{width:'70%',...BookingStyleSheet.bookingCard.text}} placeholder='P4HF03'/>
                    <TouchableOpacity><Text style={{fontFamily:'Medium',fontSize:14,color:Colors.mainCol}}>Remove</Text></TouchableOpacity>
                </View>
            </View>
            <View style={{...BookingStyleSheet.bookingCard,gap:10}}>
                <View style={BookingStyleSheet.bookingCard.bill}>
                    <Text style={BookingStyleSheet.bookingCard.bill.title}>Per Person</Text>
                    <Text style={BookingStyleSheet.bookingCard.bill.text}>&#x20b9;1200</Text>
                </View>
                <View style={BookingStyleSheet.bookingCard.bill}>
                    <Text style={BookingStyleSheet.bookingCard.bill.title}>Total Person<Text style={{color:Colors.navCol}}> x5</Text></Text>
                    <Text style={BookingStyleSheet.bookingCard.bill.text}>&#x20b9;1200</Text>
                </View>
                <View style={{...BookingStyleSheet.bookingCard.bill,borderColor:Colors.navCol,borderBottomWidth:.3,paddingBottom:10}}>
                    <Text style={BookingStyleSheet.bookingCard.bill.title}>Promo Code</Text>
                    <Text style={BookingStyleSheet.bookingCard.bill.text}>- &#x20b9;500</Text>
                </View>
                <View style={BookingStyleSheet.bookingCard.bill}>
                    <Text style={{fontFamily:'Medium',fontSize:16}}>Total Amount</Text>
                    <Text style={{fontFamily:'Medium',fontSize:16,color:Colors.mainCol}}>&#x20b9;5500</Text>
                </View>
            </View>            
        </View>
        <View style={{overflow:'hidden',paddingLeft:20,paddingRight:20,width:'100%'}}>
            <TouchableOpacity style={AuthStyleSheet.boxView.btn}>
                    <Text style={AuthStyleSheet.boxView.btn.text}>Pay Now</Text>
                    <Ionicons name='arrow-forward' size={20} color={Colors.bgCol} style={{backgroundColor:Colors.mainColLight,borderRadius:35,padding:10}}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default BookingDetails
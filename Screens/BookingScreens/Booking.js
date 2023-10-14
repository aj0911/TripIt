import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import BookingStyleSheet from './Booking.Style'
import { Ionicons } from '@expo/vector-icons'

const Booking = ({navigation}) => {
  return (
    <View>
      <View style={BookingStyleSheet.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}><Ionicons name='arrow-back' size={25}/></TouchableOpacity>
        <Text>Booking Now</Text>
        <View></View>
      </View>
    </View>
  )
}

export default Booking
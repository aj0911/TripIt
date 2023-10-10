import { View, Text } from 'react-native'
import React from 'react'
import BottomNav from '../../Components/BottomNav'

const Countries = ({navigation,route}) => {
  return (
    <View>
      <Text>Countries</Text>
      <BottomNav navigation={navigation} route={route}/>
    </View>
  )
}

export default Countries
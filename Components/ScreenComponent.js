import { View, Text, SafeAreaView, ScrollView, Platform, StatusBar } from 'react-native'
import React from 'react'

const ScreenComponent = ({Component,...rest}) => {
  return (
    <View style={{marginTop:(Platform.OS==='android')?0:0}}>
      <SafeAreaView>
            <Component {...rest}/>
      </SafeAreaView>
    </View>
  )
}

export default ScreenComponent
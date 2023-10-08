import { View, Text, SafeAreaView, ScrollView, Platform, StatusBar } from 'react-native'
import React from 'react'

const ScreenComponent = ({Component,...rest}) => {
  return (
    <View style={{marginTop:(Platform.OS==='android')?StatusBar.currentHeight:0}}>
      <SafeAreaView>
        <ScrollView>
            <Component {...rest}/>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default ScreenComponent
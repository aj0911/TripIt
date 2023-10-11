import { View, Text, Animated } from 'react-native'
import React, { useRef } from 'react'
import IndexStyleSheet from '../Index.Style'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Constants from './Constants'

const DrawerNav = ({drawerOpen,setDrawerOpen,animation,startAnimation}) => {

    

  return (
    <Animated.View style={[{...IndexStyleSheet.drawerNav},{
        transform:[{translateX:animation.interpolate({
            inputRange:[0,1],
            outputRange:[0,Constants.FULLVIEW_WIDTH]
        })}]
    }]}>
        <TouchableOpacity onPress={()=>{setDrawerOpen(false);startAnimation()}}>
            <Ionicons size={25} name='close'/>
        </TouchableOpacity>
    </Animated.View>
  )
}

export default DrawerNav
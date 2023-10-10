import { View, Text } from 'react-native'
import React from 'react'
import IndexStyleSheet from '../Index.Style'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../assets/Colors'

const StarComponent = ({size ,value}) => {
    const star = ()=>{
        let arr = [false,false,false,false,false];
        const ending = Math.floor(value);
        for(let i=0;i<ending && i<5;i++){
            arr[i]=true;
        }
        return arr;
    }
  return (
    <View style={IndexStyleSheet.starComponent}>
        {
            star().map((val,index)=>(
                <Ionicons key={index} name='star' size={size} color={(val)?Colors.starColor:Colors.navCol} />
            ))
        }
    </View>
  )
}

export default StarComponent
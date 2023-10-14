import { View, Text } from 'react-native'
import React from 'react'
import IndexStyleSheet from '../Index.Style'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../assets/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

const StarComponent = ({size ,value,setValueStar,onPressStar=false}) => {
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
                <TouchableOpacity key={index} onPress={(!onPressStar)?()=>{}:()=>setValueStar(index+1)}>
                    <Ionicons name='star' size={size} color={(val)?Colors.starColor:Colors.navCol} />
                </TouchableOpacity>
            ))
        }
    </View>
  )
}

export default StarComponent
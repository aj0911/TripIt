import { View, Text, Image } from 'react-native'
import React, {  useEffect, useState } from 'react'
import IntroStyleSheet from './Intro.Style'
import Colors from '../../assets/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { done } from '../../Reducers/IntroReducer'

const Intro = ({navigation}) => {

    const cards=[
        {
            title:'Plan Your Trip',
            text:'Plan your trip, choose your destination. Pick the best place for your holiday',
            img:require('../../assets/Images/intro-1.jpg')
        },
        {
            title:'Select The Date',
            text:'Select the date, book your tickets. We give you the best price. We guarantied!',
            img:require('../../assets/Images/intro-3.jpg')
        },
        {
            title:'Enjoy Your Trip',
            text:'Enjoy your holiday, don\'t forget to take a photo and share to the world.',
            img:require('../../assets/Images/intro-2.jpg')
        },
    ]

    const [page,setPage] = useState(0);
    const dispatch  = useDispatch();
    const introReducer = useSelector(state=>state.intro)

    useEffect(()=>{
        if(!introReducer.isIntro)navigation.navigate('Home');
    },[])
  return (
    <View style={IntroStyleSheet.Intro}>
      <View style={IntroStyleSheet.logo}>
        <Image style={{height:100,width:100,objectFit:'cover'}} source={require('../../assets/Images/Logo-mainCol.png') }/>
        <Text style={IntroStyleSheet.logo.text}>Trip<Text style={{color:Colors.mainCol}}>IT</Text></Text>
        <Text/>
      </View>
      <View style={IntroStyleSheet.IntroCards}>
        {

            cards.map((card,index)=>(
                <View key={index} style={{...IntroStyleSheet.IntroCard,left:`${(index-page)*100}%`}}>
                    <Image style={{objectFit:'contain',height:300,height:300}} source={card.img}/>
                    <Text style={IntroStyleSheet.IntroCard.title}>{card.title}</Text>
                    <Text style={IntroStyleSheet.IntroCard.text}>{card.text}</Text>
                </View>   
            ))
        }
      </View>
      <View style={{...IntroStyleSheet.pagination,justifyContent:(page>=cards.length-1)?'center':'space-between'}}>
        {
            (page>=cards.length-1)?'':
            <TouchableOpacity  onPress={()=>{dispatch(done());navigation.navigate('Home');}}>
                <Text style={IntroStyleSheet.pagination.text}>Skip</Text>
            </TouchableOpacity>
        }
        {
            (page>=cards.length-1)?
            <TouchableOpacity onPress={()=>{dispatch(done());navigation.navigate('Login');}}>
                <Text style={IntroStyleSheet.pagination.text}>Let's Go!</Text>
            </TouchableOpacity>
            :
            <View style={IntroStyleSheet.pagination.Balls}>
                {
                    cards.map((_,index)=>(
                        <View key={index} style={{height:15,width:15,borderRadius:15/2,backgroundColor:(page===index)?Colors.secCol:Colors.navCol}}></View>
                    ))
                }
            </View>
        }
        {
            (page>=cards.length-1)?'':
            <TouchableOpacity onPress={()=>setPage(page+1)}>
                <Text style={IntroStyleSheet.pagination.text}>Next</Text>
            </TouchableOpacity>
        }
      </View>
    </View>
  )
}

export default Intro
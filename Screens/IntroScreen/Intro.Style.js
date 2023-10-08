import { Dimensions, Platform, StatusBar, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

const IntroStyleSheet = StyleSheet.create({
    Intro:{
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:Colors.bgCol,
        width:'100%',
        height:Dimensions.get('screen').height - StatusBar.currentHeight,
        paddingBottom:30,
        paddingTop:20
    },
    logo:{
        flexDirection:'row',
        gap:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:'20%',
        text:{
            fontFamily:'Medium',
            fontSize:35,
            color:Colors.textColor
        },
        paddingLeft:20,
        paddingRight:20,
        width:'100%'
    },
    IntroCards:{
        flexDirection:'row',
        position:'relative',
        height:Dimensions.get('screen').height/2,
        width:'100%'
    },
    IntroCard:{
        position:'absolute',
        top:0,
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        title:{
            fontFamily:'Medium',
            fontSize:25,
            color:Colors.textColor,
            textAlign:'center',
            textAlignVertical:'center',
            marginBottom:10
        },
        text:{
            fontFamily:'Regular',
            fontSize:12,
            color:Colors.navCol,
            textAlign:'center',
            textAlignVertical:'center',
            width:'70%',
        }
    },
    pagination:{
        flexDirection:'row',
        width:'100%',
        
        paddingLeft:20,
        paddingRight:20,
        alignItems:'center',
        text:{
            fontFamily:'Medium',
            fontSize:16,
            color:Colors.secCol,
            textAlign:'center',
            textAlignVertical:'center',
            textTransform:'uppercase'
        },
        Balls:{
            flexDirection:'row',
            gap:10
        }
    }
});

export default IntroStyleSheet;
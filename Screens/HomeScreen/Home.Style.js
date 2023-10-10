import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";
import Constants from "../../Components/Constants";

const HomeStyleSheet = StyleSheet.create({
    home:{
        width:'100%',
        justifyContent:'flex-start',
        alignItems:'center',
        gap:10,
        backgroundColor:Colors.bgCol,
        paddingBottom:20
    },
    header:{
        paddingLeft:20,
        paddingRight:20,
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:10,
        text:{
            textTransform:'uppercase',
            fontFamily:'Medium',
            fontSize:25
        }
    },
    textView:{
        paddingLeft:20,
        paddingRight:20,
        width:'100%',
        gap:-5,
        title:{
            textTransform:'capitalize',
            color:Colors.mainCol,
            fontFamily:'Bold',
            fontSize:20,
            width:'100%'
        },
        text:{
            textTransform:'capitalize',
            color:Colors.navCol,
            fontFamily:'Regular',
            fontSize:12,
            width:'100%'
        },
        marginTop:5
    },
    countriesView:{
        paddingLeft:20,
        paddingRight:20,
        flexDirection:'row',
        gap:20,
        paddingBottom:30
    },
    countryView:{
        elevation:20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        width:Constants.FULLVIEW_WIDTH/3,
        overflow:'hidden',
        borderRadius:10,
        text:{
            width:'100%',
            padding:10,
            textTransform:'capitalize',
            fontFamily:'Medium',
            fontSize:12
        },
        backgroundColor:Colors.bgCol
    },
    banner:{
        width:'100%',
        text:{
            fontSize:15,
            fontFamily:'Medium',
            marginLeft:20,
            color:Colors.bgCol
        },
        justifyContent:'flex-start',
        alignItems:'flex-start',
        height:200,
        objectFit:'cover',
        paddingTop:50,
        position:'relative',
        marginBottom:100
    },
    cardsView:{
        flexDirection:'row',
        paddingLeft:20,
        paddingRight:20,
        gap:20,
        paddingBottom:20,
    },
    cardView:{
        backgroundColor:Colors.bgCol,
        elevation:20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        padding:12,
        width:Constants.FULLVIEW_WIDTH/1.5,
        borderRadius:5,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        position:'relative',
        title:{
            fontFamily:'Regular',
            fontSize:10,
            color:Colors.navCol
        },
        text:{
            fontFamily:'Medium',
            fontSize:15,
            
        },
        arrow:{
            padding:5,
            backgroundColor:Colors.mainCol,
            borderRadius:20,
            textAlign:'center',
            textAlignVertical:'center',
        },
        box:{
            width:'100%',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }
    }
});

export default HomeStyleSheet;
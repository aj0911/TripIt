import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

const BookingStyleSheet = StyleSheet.create({
    header:{
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        alignItems:'center',
        text:{
            fontFamily:'Medium',
            fontSize:25,
            textTransform:'uppercase'
        }
    },
    form:{
      paddingLeft:20,
      paddingRight:20,
      justifyContent:'center',
      alignItems:'flex-start',
      textInput:{
        fontFamily:'Regular',
        fontSize:14,
        width:'100%',
        padding:10,
        borderColor:Colors.navCol,
        borderBottomWidth:.3
      },
      text:{
        marginTop:20,
        fontFamily:'Medium',
        fontSize:14
      } 
    },
    bookingCard:{
        backgroundColor:Colors.bgCol,
        padding:20,
        elevation:10,
        borderRadius:10,
        width:'100%',
        justifyContent:'center',
        alignItems:'flex-start',
        title:{
            fontFamily:'Medium',
            fontSize:18,
        },
        text:{
            fontFamily:'Regular',
            fontSize:14,
            color:Colors.navCol
        },
        promo:{
            flexDirection:"row",
            width:'100%',
            justifyContent:'space-between',
            alignItems:'center',
            borderColor:Colors.navCol,
            borderBottomWidth:.3
        },
        bill:{
            flexDirection:"row",
            width:'100%',
            justifyContent:'space-between',
            alignItems:'center',
            title:{
                fontFamily:'Medium',
                fontSize:14
            },
            text:{
                fontFamily:'Regular',
                fontSize:14,
                color:Colors.navCol
            }
        }
    }
});

export default BookingStyleSheet;
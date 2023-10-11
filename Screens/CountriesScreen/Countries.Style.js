import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

const CountryStyleSheet = StyleSheet.create({
    card:{
        width:'100%',
        overflow:'hidden',
        borderRadius:10,
        elevation:7,
        backgroundColor:Colors.bgCol,
        title:{
            fontFamily:'Medium',
            fontSize:18,
            color:Colors.bgCol,
        },
        text:{
            fontFamily:'Regular',
            fontSize:14,
            color:Colors.bgCol,
        }
    },
    countryCardView:{
        width:'100%',
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        gap:20,
    },
    cardImageView:{
        padding:20,
        height:150,
        
        justifyContent:'flex-end',
        alignItems:'flex-start',
    }
});

export default CountryStyleSheet;
import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";
import Constants from "../../Components/Constants";

const MyTripStyleSheet = StyleSheet.create({
    tripViewCards:{
        width:'100%',
        backgroundColor:Colors.bgCol,
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        gap:20
    },
    card:{
        width:'100%',
        paddingTop:10,
        paddingLeft:10,
        paddingRight:10,
        backgroundColor:Colors.bgCol,
        elevation:10,
        borderRadius:10,
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    topCard:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderColor:Colors.navCol,
        borderBottomWidth:.2,
        paddingBottom:10
    },
    midCard:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        borderColor:Colors.navCol,
        borderBottomWidth:.2,
        paddingBottom:10,
        gap:10,
        paddingTop:10
    },
    lowerCard:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },
    btn:{
        width:'50%',
        borderColor:Colors.navCol,
        text:{
            padding:10,
            textAlign:'center',
            textAlignVertical:'center',
            fontFamily:'Regular',
            fontSize:14,
            color:Colors.navCol
        }
    }
});

export default MyTripStyleSheet;
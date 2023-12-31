import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

const NotificationStyleSheet = StyleSheet.create({
    card:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        borderBottomWidth:.3,
        borderColor:Colors.navCol,
        paddingBottom:5,
        paddingTop:5,
        overflow:'hidden',
        gap:10,
        text:{
            fontFamily:'Medium',
            fontSize:12,
            width:'75%'
        },
        date:{
            fontFamily:'Regular',
            fontSize:10,
            color:Colors.navCol
        },
    },
    notificationCardView:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden',
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20
    }
});

export default NotificationStyleSheet;
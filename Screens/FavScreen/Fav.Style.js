import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

const FavStyleSheet = StyleSheet.create({
    favCards:{
        width:'100%',
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        gap:10
    },
    card:{
        padding:10,
        flexDirection:'row',
        width:'100%',
        elevation:10,
        gap:5,
        justifyContent:'space-between',
        alignItems:'flex-start',
        overflow:'hidden',
        backgroundColor:Colors.bgCol,
        borderRadius:10
    },
    cardView:{
        justifyContent:"flex-start",
        alignItems:'flex-start',
        gap:10
    },
    heart:{
        position:'absolute',
        top:10,
        right:10,
        color:Colors.bgCol,
        backgroundColor:Colors.mainCol,
        padding:5,
        borderRadius:30
    }
});

export default FavStyleSheet; 
import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

const UserStyleSheet = StyleSheet.create({
    userView:{
        width:'100%',
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        gap:30
    },
    data:{
        width:'100%',
        justifyContent:'center',
        alignItems:'flex-start',
        borderColor:Colors.navCol,
        borderBottomWidth:.3,
        paddingBottom:10,
        field:{
            color:Colors.navCol,
            fontFamily:'Regular',
            fontSize:12,
            width:'100%'
        },
        value:{
            fontFamily:'Medium',
            fontSize:16,
            width:'100%'
        },
    },
    imgView:{
        width:200,
        height:200,
        borderRadius:100,
        overflow:'hidden',
        borderColor:Colors.bgCol,
        borderWidth:2,
        elevation:20,
    },
    profileView:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        gap:20
    }
});

export default UserStyleSheet;
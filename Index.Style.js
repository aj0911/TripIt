import { StyleSheet } from "react-native";
import Colors from "./assets/Colors";
import Constants from "./Components/Constants";

const IndexStyleSheet = StyleSheet.create({
    starComponent:{
        flexDirection:'row',
        gap:3,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    bottomNav:{
        flexDirection:'row',
        paddingLeft:20,
        paddingRight:20,
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        elevation:20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        backgroundColor:'white',
        paddingBottom:30,
        paddingTop:20,
        position:'relative',
    },
    activeBtn:{
        borderRadius:50,
        elevation:5,
    },
    activeIcon:{
        backgroundColor:Colors.mainCol,
        color:Colors.bgCol,
        padding:10,
        borderRadius:50,
    },
    drawerNav:{
        position:"absolute",
        top:0,
        left:-1*Constants.FULLVIEW_WIDTH,
        width:Constants.FULLVIEW_WIDTH,
        height:'100%',
        backgroundColor:Colors.bgCol,
        zIndex:5,
        overflow:'hidden',
        padding:20,
        name:{
            fontFamily:'Bold',
            fontSize:18,
        },
        email:{
            fontFamily:'Regular',
            fontSize:12,
            color:Colors.navCol,
            marginTop:-5
        }
    },
    optionView:{
        gap:10,
        marginTop:30
    },
    box:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        view:{
            flexDirection:'row',
            gap:10,
            alignItems:'center',
            justifyContent:'space-between',
        },
        text:{
            fontFamily:'Medium',
            fontSize:14,
        },
        borderColor:Colors.navCol,
        paddingBottom:10
    }
});

export default IndexStyleSheet;
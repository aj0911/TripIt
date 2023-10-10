import { StyleSheet } from "react-native";
import Colors from "./assets/Colors";

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
        position:'relative'
    },
    activeBtn:{
        borderRadius:50,
        elevation:5,
        padding:3,
        backgroundColor:Colors.bgCol
    },
    activeIcon:{
        backgroundColor:Colors.mainCol,
        color:Colors.bgCol,
        padding:10,
        borderRadius:50,
    }
});

export default IndexStyleSheet;
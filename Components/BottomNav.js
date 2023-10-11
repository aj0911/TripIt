import { Ionicons } from "@expo/vector-icons";
import IndexStyleSheet from "../Index.Style";
import { View,TouchableOpacity } from "react-native";


const BottomNav = ({navigation,route})=>{
    return (
        <View style={IndexStyleSheet.bottomNav}>
            <TouchableOpacity style={{width:'20%',justifyContent:'center',alignItems:'center'}} onPress={()=>navigation.navigate('Home')}>
                <View style={(route.name==='Home')?IndexStyleSheet.activeBtn:{}} >
                    <Ionicons style={(route.name==='Home')?IndexStyleSheet.activeIcon:{}} size={25} name="home-outline"/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Fav')} style={{width:'20%',justifyContent:'center',alignItems:'center'}}>
                <View style={(route.name==='Fav')?IndexStyleSheet.activeBtn:{}}>
                    <Ionicons style={(route.name==='Fav')?IndexStyleSheet.activeIcon:{}} size={25} name="heart-outline"/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={{width:'20%',justifyContent:'center',alignItems:'center'}} onPress={()=>navigation.navigate('Countries')}>
                <View style={(route.name==='Countries')?IndexStyleSheet.activeBtn:{}} >
                    <Ionicons style={(route.name==='Countries')?IndexStyleSheet.activeIcon:{}} size={25} name="briefcase-outline"/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Notification')} style={{width:'20%',justifyContent:'center',alignItems:'center'}}>
                <View style={(route.name==='Notification')?IndexStyleSheet.activeBtn:{}}>
                    <Ionicons style={(route.name==='Notification')?IndexStyleSheet.activeIcon:{}} size={25} name="notifications-outline"/>
                </View>
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>navigation.navigate('Users')} style={{width:'20%',justifyContent:'center',alignItems:'center'}}>
                <View style={(route.name==='Users')?IndexStyleSheet.activeBtn:{}}>
                    <Ionicons style={(route.name==='Users')?IndexStyleSheet.activeIcon:{}} size={25} name="person-outline"/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default BottomNav;

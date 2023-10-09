import { Dimensions, StatusBar } from "react-native";

const Constants = {
    FULLVIEW_HEIGHT :Dimensions.get('screen').height - StatusBar.currentHeight,
    FULLVIEW_WIDTH :Dimensions.get('screen').width,
    LOGIN_SCREEN:'Login',
    REGISTER_SCREEN:'Register',
    FORGOT_SCREEN:'Forgot',
    VERIFY_SCREEN:'Verify'
};

export default Constants;
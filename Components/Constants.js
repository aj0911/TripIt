import { Dimensions, StatusBar } from "react-native";

const Constants = {
    FULLVIEW_HEIGHT :Dimensions.get('screen').height - StatusBar.currentHeight,
};

export default Constants;
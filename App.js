import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts({
    Bold:require('./assets/Fonts/Poppins-Bold.ttf'),
    ExtraBold:require('./assets/Fonts/Poppins-ExtraBold.ttf'),
    ExtraLight:require('./assets/Fonts/Poppins-ExtraLight.ttf'),
    Italic:require('./assets/Fonts/Poppins-Italic.ttf'),
    Light:require('./assets/Fonts/Poppins-Light.ttf'),
    Medium:require('./assets/Fonts/Poppins-Medium.ttf'),
    Regular:require('./assets/Fonts/Poppins-Regular.ttf'),
    SemiBold:require('./assets/Fonts/Poppins-SemiBold.ttf'),
    Thin:require('./assets/Fonts/Poppins-Thin.ttf'),
  });

  const onLayoutRootView = useCallback(async()=>{
    if(fontsLoaded)await SplashScreen.hideAsync();
  },[fontsLoaded])

  if(!fontsLoaded)return null;

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

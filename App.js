import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useEffect, useState } from 'react';
import Index from './Index';
import store from './Store';
import { Provider } from 'react-redux';


export default function App() {

  const [fontsLoaded,setFontsLoaded] = useState(false);
  useEffect(()=>{
    async function loadFonts() {
      await Font.loadAsync({
        Bold: require('./assets/Fonts/Poppins-Bold.ttf'),
        ExtraBold: require('./assets/Fonts/Poppins-ExtraBold.ttf'),
        ExtraLight: require('./assets/Fonts/Poppins-ExtraLight.ttf'),
        Italic: require('./assets/Fonts/Poppins-Italic.ttf'),
        Light: require('./assets/Fonts/Poppins-Light.ttf'),
        Medium: require('./assets/Fonts/Poppins-Medium.ttf'),
        Regular: require('./assets/Fonts/Poppins-Regular.ttf'),
        SemiBold: require('./assets/Fonts/Poppins-SemiBold.ttf'),
        Thin: require('./assets/Fonts/Poppins-Thin.ttf'),
      });
      setFontsLoaded(prev=>!prev)
    }
    loadFonts();
  },[])

  if(fontsLoaded)
  return (
    <>
      <Provider store={store}>
          <Index />
      </Provider>
    </>
  )
  else return null;
}


import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react';
import Index from './Index';
import store from './Store';
import { Provider } from 'react-redux';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
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

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
          <Index onLayoutRootView={onLayoutRootView}/>
      </Provider>
    </>
  )
}


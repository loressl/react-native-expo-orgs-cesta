import { SafeAreaView, StatusBar } from 'react-native';
import { Basket } from './src/screens/Basket';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'
import * as SplashScreen from 'expo-splash-screen'

import mock from './src/mocks/basket'
import { useCallback, useEffect } from 'react';

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontLoading] = useFonts({
    "MontSerratRegular": Montserrat_400Regular,
    "MontSerratBold": Montserrat_700Bold
  })

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000))
      } catch (error) {
        console.log(error)
      } 
    }
    prepare()
  }, [])

  const onLayoutRootView = useCallback(async() => {
    if(fontLoading){
      await SplashScreen.hideAsync()
    }
  }, [fontLoading])

  if(!fontLoading){
    return null
  }


  return (
    <SafeAreaView onLayout={onLayoutRootView} style={{flex: 1}}>
      {/* o flex 1 faz com que apenas os itens visíveis sejam carregados e ocupa 100% da tela */}
      <StatusBar />
      <Basket {...mock} />
    </SafeAreaView>
  );
}
import { SafeAreaView, StatusBar, View } from 'react-native';
import { Basket } from './src/screens/Basket';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat'

export default function App() {
  const [fontLoading] = useFonts({
    "MontSerratRegular": Montserrat_400Regular,
    "MontSerratBold": Montserrat_700Bold
  })

  if(!fontLoading) {
    return (
      <View>Carregando...</View>
    )
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Basket />
    </SafeAreaView>
  );
}
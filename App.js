import { SafeAreaView, StatusBar, View } from 'react-native';
import Cesta from './src/pages/Cesta';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import mock from './src/mocks/Cesta';

export default function App() {
  const [fonte] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fonte){
    return <View />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
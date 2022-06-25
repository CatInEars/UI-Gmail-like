import React from 'react';
import {SafeAreaView} from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import {OpenSans_500Medium} from '@expo-google-fonts/open-sans';

import {LettersScreen} from './screens/LettersScreen';

const App = () => {
  // TODO Check font is loaded with splash screen
  const [fontsIsLoaded] = useFonts({
    OpenSans_500Medium,
    // 'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    // 'OpenSans-Light': require('../assets/fonts/OpenSans-Light.ttf'),
  });

  if (!fontsIsLoaded) {
    return <AppLoading autoHideSplash={true} />;
  }

  return (
    <SafeAreaView>
      <LettersScreen />
    </SafeAreaView>
  );
};

export default App;

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AppStateContextProvider } from './src/context/AppStateContext';
import Main from './src/pages/Main';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppStateContextProvider>
        <Main />
      </AppStateContextProvider>
    </SafeAreaView>
  );
};

export default App;

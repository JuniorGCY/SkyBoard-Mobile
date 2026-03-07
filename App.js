import { AuthProvider } from './src/services/AuthContext';
import RootNavigator from './src/navigation/RootNavigator';
import { useEffect } from 'react';
import * as NavigationBar from 'expo-navigation-bar';
import { Platform } from 'react-native';

export default function App() {
  useEffect(() => {
    // Só precisamos mexer nisso no Android
    if (Platform.OS === 'android') {
      // Deixa o fundo transparente
      NavigationBar.setBackgroundColorAsync('transparent');
      // Faz a barra "flutuar" sobre o app, permitindo que seu fundo vá até o final
      NavigationBar.setPositionAsync('absolute');
      // Deixa os botões (triângulo, círculo, quadrado) brancos para dar contraste com o espaço
      NavigationBar.setButtonStyleAsync('light'); 
    }
  }, []);






  return (
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
  );
}

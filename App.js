import { AuthProvider } from './src/services/AuthContext';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
  );
}

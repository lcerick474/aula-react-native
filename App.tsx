import { StatusBar } from 'expo-status-bar';

import './global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginScreen } from '@/screens/login';


export default function App() {
  return (
    <>
      <SafeAreaView className='flex-1'>
        <LoginScreen />
      </SafeAreaView>
      
      <StatusBar style="auto" />
    </>
  );
}

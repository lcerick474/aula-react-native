import { StatusBar } from 'expo-status-bar';

import './global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginScreen } from '@/screens/login';
import { ListaScreens } from '@/screens/lista';


export default function App() {
  return (
    <>
      <SafeAreaView className='flex-1'>
        <ListaScreens />
      </SafeAreaView>
      
      <StatusBar style="auto" />
    </>
  );
}

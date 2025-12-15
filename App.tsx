import { StatusBar } from 'expo-status-bar';

import './global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginScreen } from '@/screens/login';
import { ListaScreens } from '@/screens/lista';
import { TelaSoma } from '@/screens/TelaSoma';
import { TelaContador } from '@/screens/TelaContador';
import { TelaParImpar } from '@/screens/TelaParImpar';


export default function App() {
  return (
    <>
      <SafeAreaView className='flex-1'>
        <TelaParImpar />
      </SafeAreaView>
      
      <StatusBar style="auto" />
    </>
  );
}

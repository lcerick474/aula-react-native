import { StatusBar } from 'expo-status-bar';

import './global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginScreen } from '@/screens/login';
import { ListaScreens } from '@/screens/lista';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Soma } from '@/screens/soma';
import { ListasImparPar } from '@/screens/ListasImparPar';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <SafeAreaView className="flex-1">
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ListasImparPar" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ListasImparPar" component={ListasImparPar} />
            <Stack.Screen name="listas" component={ListaScreens} />
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="soma" component={Soma} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>

      <StatusBar style="auto" />
    </>
  );
}

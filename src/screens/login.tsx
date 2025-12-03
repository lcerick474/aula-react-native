import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useState } from 'react';
import { Text, View } from 'react-native';

export function LoginScreen() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  function logar() {
    console.log('Login:', login, 'Senha:', senha);
  }

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full items-center justify-center gap-5 p-5">
        <Text className="text-3xl">Nosso app</Text>

        <InputCustomizado
          placeholder={'Login'}
          onChangeText={(text) => {
            setLogin(text);
          }}
        />
        <InputCustomizado
          placeholder="senha"
          onChangeText={(text) => {
            setSenha(text);
          }}
          secureTextEntry={true}
        />
        <BotaoCustomizado title="entrar" onPress={logar} />
        <View className="flex-row gap-4">
          <Text className="text-blue-500">cadastra-se</Text>

          <Text className="text-xl">|</Text>

          <Text className="text-blue-500">Esqueceu a senha?</Text>
        </View>
      </View>
    </View>
  );
}

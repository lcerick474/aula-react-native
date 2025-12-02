import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useState } from 'react';
import { Text, View } from 'react-native';

export function LoginScreen() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full p-5 gap-5 justify-center items-center">
        <Text className="text-3xl">Nosso app</Text>

      <InputCustomizado placeholder={'Login'}
      onChangeText={(text) => {setLogin(text)}}
      />
      <InputCustomizado placeholder="senha"
      onChangeText={(text) => {setSenha(text)}}
      secureTextEntry={true}
      />
      <BotaoCustomizado title="entrar"
      onPress={() => console.log("Login:", login, "Senha:", senha)}
      />
      <Text className="text-blue-500">Esqueceu a senha</Text>

      </View>
    </View>
  );
}

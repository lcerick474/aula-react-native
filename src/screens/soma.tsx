import { Text, View } from 'react-native';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useEffect, useState } from 'react';
import { BotaoCustomizado } from '@/components/botaoCustomizado';

export function Soma() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(0);

  function logar() {
    console.log('Numero1', numero1, 'Numero2:', numero2);
  }
  function somar() {
    const soma = Number(numero1) + Number(numero2);
    setResultado(soma);
  }
  useEffect(() => {
    setResultado(0);
  }, [numero1, numero2]);
  return (
    <View className="w-full flex-1 items-center justify-center gap-5 p-5">
      <Text>Calculadora</Text>
      <InputCustomizado
        placeholder={'Número 1'}
        onChangeText={(text) => {
          setNumero1(text);
        }}
      />
      <InputCustomizado
        placeholder={'Número 2'}
        onChangeText={(text) => {
          setNumero2(text);
        }}
      />
      <BotaoCustomizado title="Soma" onPress={somar} />
      <Text>Resultado: {resultado}</Text>
    </View>
  );
}

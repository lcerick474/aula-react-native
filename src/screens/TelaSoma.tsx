import { BotaoCustomizado } from "@/components/botaoCustomizado";
import { InputCustomizado } from "@/components/inputCustomizado";
import { use, useEffect, useState } from "react";
import { Text, View } from "react-native";

export function TelaSoma() {
  const [numero1, setNumeroone] = useState('');
  const [numero2, setNumerotwo] = useState('');
  const [numero3, setNumerothree] = useState('');
  const [resultado, setResultado] = useState(0);

  function somar() {
    const soma = Number(numero1) + Number(numero2) + Number(numero3);
    setResultado(soma);
  }

  useEffect(() => {
    setResultado(0);
  }, [numero1, numero2, numero3]);

  return (

    <View className="w-full flex-1 items-center justify-center gap-5 p-5">
      <Text className="text-4xl">Soma</Text>
      <InputCustomizado placeholder="Número one"
      keyboardType="numeric"
      onChangeText={(text) => {
          setNumeroone(text);
      }}
      />
      <InputCustomizado placeholder="Número two"
      keyboardType="numeric"
      onChangeText={(text) => {
          setNumerotwo(text);
      }}
      />
      <InputCustomizado placeholder="Número three"
      keyboardType="numeric"
      onChangeText={(text) => {
          setNumerothree(text);
      }}
      />
      <BotaoCustomizado title="Calcular" onPress={somar} />
      <Text className="text-3xl">Resultado: {resultado}</Text>

    </View>
  )
}
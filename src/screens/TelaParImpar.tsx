import { BotaoCustomizado } from "@/components/botaoCustomizado";
import { InputCustomizado } from "@/components/inputCustomizado";
import { useState } from "react";
import { Text, View } from "react-native";

export function TelaParImpar() {

  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState("");

  function verificarParImpar() {
    const numero = Number(valor);

    if (isNaN(numero)) {
      setResultado("Digite um número válido");
      return;
    }

    if (numero % 2 === 0) {
      setResultado("O número é Par");
    } else {
      setResultado("O número é Ímpar");
    }
  }

  return (
    <View className="w-full flex-1 items-center justify-center gap-5 p-5">
      <Text className="text-4xl">Impar ou par</Text>
      <InputCustomizado value={valor}
        onChangeText={setValor}
        keyboardType="numeric"/>
      <BotaoCustomizado title="Verificar" onPress={verificarParImpar} />
      <Text className="text-5xl">{resultado}</Text>
    </View>
  )
}
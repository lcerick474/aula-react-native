import { BotaoCustomizado } from "@/components/botaoCustomizado";
import { InputCustomizado } from "@/components/inputCustomizado";
import { useState } from "react";
import { Text, View } from "react-native";

export function TelaMedia() {

  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [media, setMedia] = useState("");
  
  function calcularMedia() {
    const mediaCalculada = (parseFloat(nota1) + parseFloat(nota2)) / 2;
    setMedia(mediaCalculada.toString());
  }
  return (
    <View className="w-full flex-1 items-center justify-center gap-5 p-5">
      <Text className="text-4xl">Media</Text>
      <InputCustomizado placeholder="Nota one" keyboardType="numeric" value={nota1} onChangeText={setNota1} />
      <InputCustomizado placeholder="Nota two" keyboardType="numeric" value={nota2} onChangeText={setNota2} />
      <BotaoCustomizado title="Media" onPress={calcularMedia} />
      <Text className="text-3xl">Nota: {media}</Text>

    </View>
  )
}
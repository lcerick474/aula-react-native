import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { getData, storeData } from '@/utils/storage';
import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

export function ListasImparPar() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState<number[]>([]);

    async function adicionarItem() {
      setLista([...lista, Number(item)]);

      await storeData({ key: 'listaNumero', value: JSON.stringify([...lista, Number(item)])});
      setItem('');
    }

    async function limparLista() {
      setLista([]);
      await storeData({ key: 'listaNumero', value: JSON.stringify([])});
    }

    async function carregarLista() {
      const dados = await getData('listaNumero');
      console.log("dados carregados", dados);
      if (JSON.parse(dados) !== null) {
        console.log("dados parseados", JSON.parse(dados));
        setLista(JSON.parse(dados) as number[]);
    }
  }

    useEffect(() => {
      carregarLista();
    }, []);

  return (
    <View className="w-full flex-1 items-center gap-5 p-5">
          <Text>Lista de Itens</Text>
          <InputCustomizado placeholder="item" keyboardType='numeric' value={item} onChangeText={setItem} />
          <BotaoCustomizado onPress={adicionarItem} title="Adicionar" />
          <BotaoCustomizado onPress={limparLista} title="Limpar" />
          <ScrollView className="mt-5 w-full gap-5 rounded-lg border border-gray-300 p-3">
            {lista.map((item, index) => (
              <Text key={index} className="text-2xl">
                {item} é {item % 2 === 0 ? 'Par' : 'Ímpar'}                                                                                                                                                               
              </Text>
            ))}
          </ScrollView>
        </View>
  )
}
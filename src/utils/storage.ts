import AsyncStorage from "@react-native-async-storage/async-storage";

interface IStorage {
  key: string;
  value: string;
}

export const storeData = async ({value, key}: IStorage) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log("Erro ao salvar o dado", e);
  }
};

export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("Erro ao ler o dado", e);
  }
};
import { TextInput, TextInputProps, View } from 'react-native';

export function InputCustomizado({ ...rest }: TextInputProps) {
  return (
    <View className="rounded-2x1 w-full border-2 border-black-500">
      <TextInput {...rest} />
    </View>
  );
}

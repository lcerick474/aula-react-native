import { TextInput, TextInputProps, View } from 'react-native';

export function InputCustomizado({ ...rest }: TextInputProps) {
  return (
    <View className="rounded-2x1 border-black-500 w-full border-2">
      <TextInput {...rest} />
    </View>
  );
}

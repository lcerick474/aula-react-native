import { Button, ButtonProps, TextInputProps, View } from 'react-native';

export function BotaoCustomizado(rest: ButtonProps) {
  return (
    <View className="rounded-2x1 w-full border-2 border-black-500">
      <Button {...rest} />
    </View>
  );
}

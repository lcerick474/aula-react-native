import { Button, ButtonProps, TextInputProps, View } from 'react-native';

export function BotaoCustomizado(rest: ButtonProps) {
  return (
    <View className="rounded-2x1 border-black-500 w-full border-2">
      <Button {...rest} />
    </View>
  );
}

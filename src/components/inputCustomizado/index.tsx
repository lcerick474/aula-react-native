import { TextInput, TextInputProps } from 'react-native';

export function InputCustomizado( {...rest}: TextInputProps)
 {
  return (
    <TextInput
      {...rest}
    />
  )
}
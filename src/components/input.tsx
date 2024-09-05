import { Text, TextInput, View, StyleSheet, TextInputProps } from "react-native"

export function Input({ ...props }: TextInputProps) {
  return (
    <TextInput style={styles.textInput} {...props} />
  )
}
const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#484646',
    paddingHorizontal: 8
  },
})
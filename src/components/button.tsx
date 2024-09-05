import { TouchableOpacity, TouchableOpacityProps, StyleSheet, Text } from "react-native"

export function Button({ children, ...props }: TouchableOpacityProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button} {...props}>
      <Text style={{ color: '#fff' }}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: '#000',
    paddingHorizontal: 8
  },
})
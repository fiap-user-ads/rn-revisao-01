import { SafeAreaView, Text, View, StyleSheet } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack"

import { RootStackParamsList } from "../types/navigation"

import { Input } from "../components/input"
import { Button } from "../components/button"
import { useState } from "react"

type HomeScreenNavigationProps = StackNavigationProp<RootStackParamsList, 'Home'>

type Props = {
  navigation: HomeScreenNavigationProps
}

export default function HomeScreen({ navigation }: Props) {
  const [name, setName] = useState('')

  function onPress() {
    navigation.navigate('Details', { name })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Let's create your event</Text>

        <View style={{ width: '100%', gap: 16, alignItems: 'center' }}>
          <Input placeholder="Enter event name" value={name} onChangeText={setName} />

          <Button onPress={onPress}>
            Next
          </Button>
        </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 4 },
  subtitle: { fontSize: 18, marginBottom: 24 }
})
import { SafeAreaView, Text, View, StyleSheet } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

import { RootStackParamsList } from "../types/navigation"

import { Input } from "../components/input"
import { Button } from "../components/button"
import { useState } from "react"

type DetailsScreenNavigationProps = StackNavigationProp<RootStackParamsList, 'Details'>
type DetailsScreenRouteProp = RouteProp<RootStackParamsList, 'Details'>

type Props = {
  navigation: DetailsScreenNavigationProps,
  route: DetailsScreenRouteProp
}

export default function DetailsScreen({ navigation, route }: Props) {
  const { name } = route.params

  const [date, setDate] = useState('')
  const [local, setLocal] = useState('')

  function onPress() {
    navigation.navigate('Summary', { name, date, local })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Details</Text>
        <Text style={styles.subtitle}>Please enter event details below</Text>

        <View style={{ width: '100%', gap: 16, alignItems: 'center' }}>
          <Input placeholder="Date" value={date} onChangeText={setDate} />
          <Input placeholder="Local" value={local} onChangeText={setLocal} />

          <Button onPress={onPress}>
            Submit
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
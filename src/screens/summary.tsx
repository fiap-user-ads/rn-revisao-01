import { SafeAreaView, Text, View, StyleSheet } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

import { RootStackParamsList } from "../types/navigation"
import { Button } from "../components/button"

type SummaryScreenNavigationProps = StackNavigationProp<RootStackParamsList, 'Summary'>
type SummaryScreenRouteProp = RouteProp<RootStackParamsList, 'Summary'>

type Props = {
  navigation: SummaryScreenNavigationProps,
  route: SummaryScreenRouteProp
}

export default function SummaryScreen({ navigation, route }: Props) {
  const { name, date, local } = route.params

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Summary</Text>
        <Text style={styles.title}>{name}</Text>
        <Text>Date: {date}</Text>
        <Text style={{ marginBottom: 32 }}>Local: {local}</Text>

        <Button onPress={() => navigation.replace("Home")}>
          Exit
        </Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24 }
})
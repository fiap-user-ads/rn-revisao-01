import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../types/navigation'

import DetailsScreen from "../screens/details"
import HomeScreen from "../screens/home"
import SummaryScreen from "../screens/summary"

const StackNavigator = createNativeStackNavigator<RootStackParamsList>()

export default function StackNavigation() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
      <StackNavigator.Screen name='Details' component={DetailsScreen} options={{ headerShown: false }} />
      <StackNavigator.Screen name='Summary' component={SummaryScreen} options={{ headerShown: false }} />
    </StackNavigator.Navigator>
  )
}
import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

export default function TargetDetails() {
  const { id, name, percentage, current, target } = useLocalSearchParams()

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
        {name}
      </Text>

      <Text style={{ marginTop: 10 }}>
        Progresso: {percentage}
      </Text>

      <Text>
        Atual: {current}
      </Text>

      <Text>
        Meta: {target}
      </Text>

      <Text style={{ marginTop: 20 }}>
        ID: {id}
      </Text>
    </View>
  )
}
import { View, Text, Button } from 'react-native'
import { router } from 'expo-router'

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 24, gap: 12 }}>
      <Text>Home</Text>
      <Button title="Nova meta" onPress={() => router.navigate('/target')} />
    </View>
  )
}
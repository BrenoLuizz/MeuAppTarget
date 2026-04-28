import { View } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { TransactionTypes } from '@/utils/TransactionTypes'
import { TransactionType } from '@/components/TransactionType'
import { CurrencyInput } from '@/components/CurrencyInput'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

export default function Transaction() {
  const params = useLocalSearchParams<{ id: string }>()
  const [type, setType] = useState(TransactionTypes.Input)
  const [value, setValue] = useState<number | null>(0)
  const [reason, setReason] = useState('')

  return (
    <View style={{ flex: 1, padding: 24, gap: 24 }}>
      <TransactionType selected={type} onChange={setType} />

      <CurrencyInput label="Valor (R$)" value={value} onChangeValue={setValue} />

      <Input
        label="Motivo"
        placeholder="Ex: Investir em CDB"
        value={reason}
        onChangeText={setReason}
      />

      <Button title={`Salvar na meta ${params.id}`} onPress={() => {}} />
    </View>
  )
}
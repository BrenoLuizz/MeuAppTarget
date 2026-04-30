import { FlatList, FlatListProps, Text, View, ViewStyle } from 'react-native'

import { styles } from './styles'

type Props<T> = FlatListProps<T> & {
  title: string
  emptyMessage?: string
  containerStyle?: ViewStyle
}

export function List<T>({
  title,
  emptyMessage,
  containerStyle,
  data,
  renderItem,
  ...rest
}: Props<T>) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={
          emptyMessage ? (
            <Text style={styles.empty}>{emptyMessage}</Text>
          ) : null
        }
        showsVerticalScrollIndicator={false}
        {...rest}
      />
    </View>
  )
}
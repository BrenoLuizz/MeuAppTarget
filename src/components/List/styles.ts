import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingTop: 16,
    paddingBottom: 72,
  },
  title: {
    fontSize: 16,
    color: colors.black,
    fontFamily: fontFamily.medium,
  },
  empty: {
    fontSize: 14,
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
    textAlign: 'center',
    marginTop: 20,
  },
  separator: {
    height: 1,
    backgroundColor: colors.gray[200],
    marginVertical: 12,
  },
})
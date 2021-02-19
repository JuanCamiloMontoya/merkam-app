import { StyleSheet } from "react-native"
import { wp } from "../../../common/constants/Mixins"

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemUser: {
    backgroundColor: '#FFF',
    width: wp(90),
    paddingVertical: wp(0.05)
  },
  itemUserText: {
    backgroundColor: '#777',
    fontSize: wp(3.5)
  }
})
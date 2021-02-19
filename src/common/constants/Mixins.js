import { Dimensions } from 'react-native'

export const { width, height } = Dimensions.get('window')

export const wp = size => (width * size / 100)
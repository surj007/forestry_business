import { Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width;

export function px2Dp(px) {
  return px * deviceWidth / 360;
}
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export const StyledLogo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const StyledIcon = styled(Icon).attrs({
  color: '#333',
  size: 30,
  name: 'headset-mic',
})`
  transform: rotate(30deg);
`

export const Title = styled.Text`
  margin-left: 10px;
  font-size: 25px;
  color: #333;
`

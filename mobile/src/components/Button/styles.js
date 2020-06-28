import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const StyledButton = styled(TouchableOpacity)`
  ${({ grayButton }) =>
    grayButton
      ? css`
          background: #ccc;
        `
      : css`
          background: #f05a5b;
        `}

  height: 42px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
`

export const StyledButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`

import React from 'react'
import { StyledButton, StyledButtonText } from './styles'

export default function Button({ children, ...otherProps }) {
  return (
    <StyledButton {...otherProps}>
      <StyledButtonText>{children}</StyledButtonText>
    </StyledButton>
  )
}

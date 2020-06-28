import React from 'react'

import { StyledButton } from './styles'

export default function Button({ children, ...otherProps }) {
  return <StyledButton {...otherProps}>{children}</StyledButton>
}

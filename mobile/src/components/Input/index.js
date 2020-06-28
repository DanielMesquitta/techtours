import React from 'react'
import { StyledInput, Label } from './styles'

export default function Input({ label, ...otherProps }) {
  return (
    <>
      <Label>{label}</Label>
      <StyledInput {...otherProps} />
    </>
  )
}

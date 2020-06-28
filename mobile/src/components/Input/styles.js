import styled from 'styled-components/native'

export const Label = styled.Text`
  font-weight: bold;
  color: #444;
  margin-bottom: 8px;
  text-transform: uppercase;
`

export const StyledInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: '#999',
}))`
  border: 1px solid #ddd;
  padding: 0 20px;
  font-size: 16px;
  color: #444;
  height: 44px;
  margin-bottom: 20px;
  border-radius: 2px;
`

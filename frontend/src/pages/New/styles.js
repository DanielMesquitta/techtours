import styled from 'styled-components'

export const Thumbnail = styled.label`
  margin-bottom: 20px;
  border: 1px dashed #ddd;
  background-size: cover;
  display: flex;
  height: 160px;
  background: #fff;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.2s;

  input {
    display: none;
  }
  :hover {
    background-color: #f9f9f9;
  }
`

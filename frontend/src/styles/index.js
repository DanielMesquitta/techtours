import styled from 'styled-components'

export const Container = styled.div`
  margin: 80px auto 0;
  max-width: 600px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'MuseoModerno', cursive;
  color: #fff;
  font-size: 20px;

  svg {
    margin-right: 10px;
    transform: rotate(30deg);
  }
`

export const Content = styled.div`
  width: 100%;
  background: #fff;
  margin-top: 50px;
  border-radius: 4px;
  padding: 30px;

  > p {
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 14px;
      color: #444;
      font-weight: bold;
      margin-bottom: 8px;

      span {
        font-weight: normal;
        color: #999;
        font-size: 12px;
      }
    }

    input {
      margin-bottom: 20px;
      border: 1px solid #ddd;
      border-radius: 2px;
      height: 45px;
      padding: 0 15px;
      font-size: 16px;
    }
  }
`

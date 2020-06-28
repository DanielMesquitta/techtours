import styled from 'styled-components'

export const Container = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;

  li {
    display: flex;
    flex-direction: column;

    header {
      width: 100%;
      height: 120px;
      background-size: cover;
      border-radius: 4px;
    }

    strong {
      margin-top: 10;
      font-size: 24px;
      color: #444;
    }

    span {
      font-size: 15px;
      color: #999;
    }
  }
`

export const Notifications = styled.ul`
  margin-bottom: 15px;

  li {
    font-size: 16px;
    line-height: 24px;

    button {
      margin-right: 10px;
      border: 0;
      background: #0000;
      font-weight: bold;
      margin-top: 10px;
    }
  }
`

export const Accept = styled.button`
  color: #84c870;
`

export const Reject = styled.button`
  color: #e55e58;
`

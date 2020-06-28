import React from 'react'
import { MdHeadsetMic } from 'react-icons/md'

import Routes from './routes'
import { GlobalStyles } from './styles/global'
import { Container, Content, Header, Icon } from './styles'

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header>
          <MdHeadsetMic color="#fff" size={50} />
          <h1>tech_tours</h1>
        </Header>

        <Content>
          <Routes />
        </Content>
      </Container>
    </>
  )
}

export default App

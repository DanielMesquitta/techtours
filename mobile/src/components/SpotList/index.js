import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import api, { ip } from '../../services/api'
import {
  Container,
  Title,
  Bold,
  List,
  ListItem,
  Thumbnail,
  Comapany,
  Price,
} from './styles'
import Button from '../../components/Button'

export default function SpotList({ tech }) {
  const [spots, setSpots] = useState([])
  const navigation = useNavigation()

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/spots', {
        params: { tech },
      })
      setSpots(response.data)
    }
    loadSpots()
  }, [])

  function handleNavigation(id) {
    navigation.navigate('Book', { id })
  }

  return (
    <Container>
      <Title>
        Empresas que usam <Bold>{tech}</Bold>
      </Title>

      <List
        data={spots}
        keyExtractor={spot => spot._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <ListItem>
              <Thumbnail
                source={{
                  uri: item.thumbnail_url.replace('localhost', ip),
                }}
              />
              <Comapany>{item.company}</Comapany>
              <Price>{item.price ? `R$${item.price}/dia` : 'GRATUITO'}</Price>
              <Button onPress={() => handleNavigation(item._id)}>
                Solicitar Reserva
              </Button>
            </ListItem>
          )
        }}
      />
    </Container>
  )
}

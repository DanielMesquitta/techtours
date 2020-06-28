import React, { useState, useEffect } from 'react'
import { Alert } from 'react-native'
import { ScrollView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import socketio from 'socket.io-client'

import { Container, Margin } from './styles'
import SpotList from '../../components/SpotList'
import { ip } from '../../services/api'
import Logo from '../../components/Logo'

export default function List() {
  const [techs, setTechs] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('user').then(user_id => {
      const socket = socketio(`http://${ip}:3333`, {
        query: { user_id },
      })

      socket.on('booking_response', booking => {
        Alert.alert(
          `Sua reserva em ${booking.spot.company} em ${booking.date} foi ${
            booking.approved ? 'APROVADA' : 'REJEITADA'
          }`
        )
      })
    })
  }, [])

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storagedTechs => {
      const techsArray = storagedTechs.split(',').map(tech => tech.trim())
      setTechs(techsArray)
    })
  }, [])

  return (
    <Container>
      <ScrollView>
        <Margin>
          <Logo />
        </Margin>

        {techs.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))}
      </ScrollView>
    </Container>
  )
}

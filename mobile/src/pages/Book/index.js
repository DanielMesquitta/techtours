import React, { useState } from 'react'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import api from '../../services/api'
import { Container, MarginTop } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

export default function Book({ navigation, route }) {
  const [date, setDate] = useState('')
  const { id } = route.params

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem('user')

    await api.post(
      `/spots/${id}/bookings`,
      {
        date,
      },
      {
        headers: { user_id },
      }
    )

    Alert.alert('Solicitação de reserva enviada.')
    navigation.goBack()
  }

  return (
    <Container>
      <Input
        label="Data de interesse"
        placeholder="Qual data deseja reservar?"
        autoCapitalize="words"
        value={date}
        onChangeText={setDate}
      />

      <Button onPress={handleSubmit}>Solicitar reserva</Button>
      <MarginTop />
      <Button grayButton onPress={navigation.goBack}>
        Cancelar
      </Button>
    </Container>
  )
}

import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import api from '../../services/api'
import { Container, Form } from './styles'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Logo from '../../components/Logo'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [techs, setTechs] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('List')
      }
    })
  }, [])

  async function handleSubmit() {
    const response = await api.post('/sessions', {
      email,
    })
    const { _id } = response.data
    await AsyncStorage.setItem('user', _id)
    await AsyncStorage.setItem('techs', techs)
    navigation.navigate('List')
  }

  return (
    <Container>
      <Logo />

      <Form behavior="padding">
        <Input
          label="Seu e-mail *"
          placeholder="Seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <Input
          label="Tecnologias *"
          placeholder="Tecnologias de interesse"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />

        <Button onPress={handleSubmit}>
          {loading ? <ActivityIndicator /> : 'Encontrar spots'}
        </Button>
      </Form>
    </Container>
  )
}

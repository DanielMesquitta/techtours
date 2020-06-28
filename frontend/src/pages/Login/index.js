import React, { useState } from 'react'

import api from '../../services/api'
import Button from '../../components/Button'

export default function Login({ history }) {
  const [email, setEmail] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const response = await api.post('/sessions', { email })
    const { _id } = response.data
    localStorage.setItem('user', _id)
    history.push('/dashboard')
  }

  return (
    <>
      <p>
        Ofereça <strong> tours </strong> para programadores e compartilhe
        <strong> experiências </strong> de sua empresa.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail *</label>
        <input
          type="email"
          id="email"
          placeholde="Seu e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <Button type="submit">Entrar</Button>
      </form>
    </>
  )
}

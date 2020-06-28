import React, { useState, useMemo } from 'react'

import api from '../../services/api'
import camera from '../../assets/camera.svg'
import { Thumbnail } from './styles'
import Button from '../../components/Button'

export default function New({ history }) {
  const [company, setCompany] = useState('')
  const [techs, setTechs] = useState('')
  const [price, setPrice] = useState('')
  const [thumbnail, setThumbnail] = useState(null)

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null
  }, [thumbnail])

  async function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData()
    const user_id = localStorage.getItem('user')

    data.append('thumbnail', thumbnail)
    data.append('company', company)
    data.append('techs', techs)
    data.append('price', price)

    const response = await api.post('/spots', data, {
      headers: { user_id },
    })

    history.push('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Thumbnail style={{ backgroundImage: `url(${preview})` }}>
        <input type="file" onChange={e => setThumbnail(e.target.files[0])} />
        <img src={camera} alt="Select img" />
      </Thumbnail>

      <label htmlFor="company">Empresa *</label>
      <input
        id="company"
        placeholder="Sua empresa"
        value={company}
        onChange={e => setCompany(e.target.value)}
      />

      <label htmlFor="techs">
        Tecnologias * <span>(separadas por vírgula)</span>
      </label>
      <input
        id="techs"
        placeholder="Quais tecnologias usam"
        value={techs}
        onChange={e => setTechs(e.target.value)}
      />

      <label htmlFor="price">
        Valor da diária <span>(em branco para GRATUITO)</span>
      </label>
      <input
        id="price"
        placeholder="Valor cobrado por dia"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />

      <Button type="submit">Cadastrar</Button>
    </form>
  )
}

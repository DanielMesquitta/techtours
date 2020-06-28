import axios from 'axios'

const ip = '192.168.100.26'

const api = axios.create({
  baseURL: `http://${ip}:3333`,
})

export default api
export { ip }

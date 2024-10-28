import axios from 'axios'
let baseUrl = 'http://10.0.2.2:5239/api'
let ApiUnirota = axios.create({
  baseURL: baseUrl,
  timeout: 13000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
ApiUnirota.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
ApiUnirota.defaults.headers.get['Access-Control-Allow-Origin'] = '*'
ApiUnirota.defaults.headers.put['Access-Control-Allow-Origin'] = '*'
ApiUnirota.defaults.headers.patch['Access-Control-Allow-Origin'] = '*'
ApiUnirota.defaults.headers.delete['Access-Control-Allow-Origin'] = '*'
export default ApiUnirota

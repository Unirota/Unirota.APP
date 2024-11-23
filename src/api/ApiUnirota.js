import axios from 'axios'
let baseUrl = 'http://unirotaapiloadbalancer-291617151.us-east-2.elb.amazonaws.com:8080/api'

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

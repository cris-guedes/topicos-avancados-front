import axios from 'axios'
import envs from '../../../../shared/envs'

const httpSideApiProvider = axios.create({
  baseURL: envs.API.sideApi,
  headers: {"Content-Type": "application/json"}
})

export default httpSideApiProvider

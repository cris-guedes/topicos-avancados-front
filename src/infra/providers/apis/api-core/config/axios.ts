import axios from 'axios'
import envs from '../../../../../../shared/envs'

const httpCoreProvider = axios.create({
  baseURL: envs.API.coreApi,
  headers: { 'Content-Type': 'application/json' }
})

export default httpCoreProvider

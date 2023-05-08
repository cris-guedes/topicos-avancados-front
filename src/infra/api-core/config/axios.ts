import axios from 'axios'
import envs from '../../../main/shared/envs'

const httpCoreProvider = axios.create({
  baseURL: envs.API.coreApi
})

export default httpCoreProvider
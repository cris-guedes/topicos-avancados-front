import axios from 'axios'
import envs from '../../../../shared/envs'

const httpSideApiProvider = axios.create({
  baseURL: envs.API.sideApi
})

export default httpSideApiProvider

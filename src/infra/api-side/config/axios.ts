import axios from 'axios'
import envs from '../../../main/shared/envs'

const httpSideApiProvider = axios.create({
  baseURL: envs.API.sideApi
})

export default httpSideApiProvider
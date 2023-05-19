import { type } from 'os'
import { Vehicle } from './vehicle'

export type CarRegistration = {
  id: string
  plate: string
  state: string
  city: string
  vehicle: any
}

export type InputCarRegistration = {
  plate: string
  state: string
  city: string
  vehicle: string
}

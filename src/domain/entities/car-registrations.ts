import { Vehicle } from './vehicle'

export type CarRegistration = {
  id: string
  plate: string
  state: string
  city: string
  vehicle: Vehicle
}

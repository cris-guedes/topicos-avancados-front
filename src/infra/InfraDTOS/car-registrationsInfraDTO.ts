import { Id, Link } from './baseDTO'

export type CarRegistrationInfraDTO = {
  id: Id
  plate: string
  state: string
  city: string
  vehicle: Link
}

export type InputCarRegistrationInfraDTO = {
  plate: string
  state: string
  city: string
  vehicle?: string
}

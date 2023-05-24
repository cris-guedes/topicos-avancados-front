import { Id, Link } from './baseDTO'

export type AddressInfraDTO = {
  id: Id
  state: string
  city: string
  publicPlace: string
  neighborhood: string
  number: string
  report: Link
}

export type InputAddressInfraDTO = {
  state: string
  city: string
  publicPlace: string
  neighborhood: string
  number: string
  report?: Link
}

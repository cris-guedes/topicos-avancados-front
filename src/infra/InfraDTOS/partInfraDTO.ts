import { Id } from './baseDTO'

export type PartInfraDTO = {
  id: Id
  name: string
  email: string
  involvement: string
}

export type InputPartInfraDTO = {
  name: string
  email: string
  involvement: string
}

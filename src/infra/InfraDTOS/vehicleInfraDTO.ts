import { Id, Link } from './baseDTO'
import { InputCarRegistrationInfraDTO } from './car-registrationsInfraDTO'

export type VehicleInfraDTO = {
  id: Id
  anoFabricacao: string
  cor: string
  fabricante: string
  tipoVeiculo: string
  modelo: string
  emplacamento: Link
  boletim: Link
}

export type InputVehicleInfraDTO = {
  anoFabricacao: string
  cor: string
  fabricante: string
  tipoVeiculo: string
  modelo: string
  emplacamento: InputCarRegistrationInfraDTO
  boletim?: Link
}

import { CarRegistration, InputCarRegistration } from './car-registrations'
import { Report } from './report'

export type Vehicle = {
  id: String
  anoFabricacao: String
  cor: String
  fabricante: String
  tipoVeiculo: String
  modelo: String
  emplacamento: any
  boletim: any
}

export type InputVehicle = {
  anoFabricacao: String
  cor: String
  fabricante: String
  tipoVeiculo: String
  modelo: String
  emplacamento: InputCarRegistration
  boletim?: string
}

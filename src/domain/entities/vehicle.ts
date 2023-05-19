import { CarRegistration } from './car-registrations'
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
  id: String
  anoFabricacao: String
  cor: String
  fabricante: String
  tipoVeiculo: String
  modelo: String
  emplacamento: string
  boletim: string
}
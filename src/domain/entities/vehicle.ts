import { CarRegistration, InputCarRegistration } from './car-registrations'
import { Report } from './report'

export type Vehicle = {
  id: string
  anoFabricacao: string
  cor: string
  fabricante: string
  tipoVeiculo: string
  modelo: string
  emplacamento: CarRegistration
  boletim: Report
}

export type InputVehicle = {
  anoFabricacao: string
  cor: string
  fabricante: string
  tipoVeiculo: string
  modelo: string
  emplacamento: InputCarRegistration
  boletim?: string
}

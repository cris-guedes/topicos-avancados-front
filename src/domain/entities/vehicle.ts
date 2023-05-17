import { CarRegistration } from './car-registrations'

export type Vehicle = {
  id: String
  anoFabricacao: String
  cor: String
  fabricante: String
  tipoVeiculo: String
  modelo: String
  emplacamento: CarRegistration
}

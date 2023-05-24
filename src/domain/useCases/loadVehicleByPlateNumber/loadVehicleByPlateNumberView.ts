import { CarRegistration } from '../../entities/car-registrations'

export type LoadVehicleByPlateNumberView = {
  id: string
  anoFabricacao: string
  cor: string
  fabricante: string
  tipoVeiculo: string
  modelo: string
  emplacamento: CarRegistration
}

import { Address, InputAddress } from './addres'
import { InputPart, Part } from './part'
import { InputVehicle, Vehicle } from './vehicle'

export type Report = {
  id: string
  dataOcorrencia: string
  periodoOcorrencia: string
  partes: string[]
  localOcorrencia: string
  veiculoFurtado: Vehicle
}

export type InputReport = {
  dataOcorrencia: string
  periodoOcorrencia: string
  partes?: InputPart
  localOcorrencia: InputAddress
  veiculoFurtado?: InputVehicle
}

export type LoadReportById = {
  id: string
  dataOcorrencia: string
  periodoOcorrencia: string
  partes: Part
  localOcorrencia: Address
  veiculoFurtado: Vehicle
}

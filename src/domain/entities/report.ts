import { InputAddress } from './addres'
import { InputPart, Part } from './part'
import { InputVehicle } from './vehicle'

export type Report = {
  id: String
  dataOcorrencia: String
  periodoOcorrencia: String
  partes: String[]
  localOcorrencia: String
  veiculoFurtado: any
}

export type InputReport = {
  dataOcorrencia: String
  periodoOcorrencia: String
  partes?: InputPart
  localOcorrencia: InputAddress
  veiculoFurtado?: InputVehicle
}

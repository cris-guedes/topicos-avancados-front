import { Address } from '../../entities/addres'
import { Part } from '../../entities/part'
import { Vehicle } from '../../entities/vehicle'

export type LoadReportByIdView = {
  id: string
  dataOcorrencia: string
  periodoOcorrencia: string
  partes: Part
  localOcorrencia: Address
  veiculoFurtado: Vehicle
}

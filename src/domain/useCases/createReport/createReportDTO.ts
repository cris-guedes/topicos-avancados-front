import { Address } from '../../entities/addres'
import { Report } from '../../entities/report'
import { Vehicle } from '../../entities/vehicle'

export type CreateReportDTO = {
  localOcorrencia: Address
  veiculoFurtado: Vehicle
} & Report

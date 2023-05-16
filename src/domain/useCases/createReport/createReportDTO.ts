import { Address } from '../../entities/addres'
import { Report } from '../../entities/report'
import { Vehicle } from '../../entities/vehicle'

export type CreateReportDTO = {
  report: Report
  address: Address
  vehicle: Vehicle
}

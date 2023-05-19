import ReportService from '../../../infra/api-core/report-resourse'
import VehicleService from '../../../infra/api-core/vehicles-resourse'
import AddressService from '../../../infra/api-side/address-service'
import CarRegistrationService from '../../../infra/api-side/car-registration-service'
import { CreateReport } from './createReport'

const makeCreateReport = () => {
  const reportProvider = new ReportService()
  const addressProvider = new AddressService()
  const carRegistrationProvider = new CarRegistrationService()
  const vehicleProvider = new VehicleService()
  const createReportUseCase = new CreateReport(reportProvider, carRegistrationProvider, vehicleProvider, addressProvider)
  return createReportUseCase
}

export default makeCreateReport

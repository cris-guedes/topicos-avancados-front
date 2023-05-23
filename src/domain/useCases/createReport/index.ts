import ReportService from '../../../infra/api-core/report-resourse'
import VehicleService from '../../../infra/api-core/vehicles-resourse'
import AddressService from '../../../infra/api-side/address-service'
import CarRegistrationService from '../../../infra/api-side/car-registration-service'
import PartService from '../../../infra/api-side/part-service'
import GenericHttpRequest from '../../../infra/genericHttpRequest/genericHttpRequest'
import { CreateReport } from './createReport'

const makeCreateReport = () => {
  const reportProvider = new ReportService()
  const addressProvider = new AddressService()
  const carRegistrationProvider = new CarRegistrationService()
  const vehicleProvider = new VehicleService()
  const partProvider = new PartService()
  const genericHttp = new GenericHttpRequest()
  const createReportUseCase = new CreateReport(
    reportProvider,
    carRegistrationProvider,
    vehicleProvider,
    addressProvider,
    partProvider,
    genericHttp
  )
  return createReportUseCase
}

export default makeCreateReport

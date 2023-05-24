import CarRegistrationService from '../../../infra/providers/apis/api-side/car-registration-service'
import GenericHttpRequest from '../../../infra/providers/genericHttpRequest/genericHttpRequest'
import { LoadVehiclesByPlateNumber } from './loadVehicleByPlateNumber'

const makeLoadVehiclesByPlateNumber = () => {
  const carRegistration = new CarRegistrationService()
  const httpRequester = new GenericHttpRequest()
  const LoadReportsByPlateNumberUseCase = new LoadVehiclesByPlateNumber(
    carRegistration,
    httpRequester
  )
  return LoadReportsByPlateNumberUseCase
}

export default makeLoadVehiclesByPlateNumber

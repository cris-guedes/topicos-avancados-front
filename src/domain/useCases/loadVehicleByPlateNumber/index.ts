import { LoadVehiclesByPlateNumber } from './loadVehicleByPlateNumber'
import CarRegistrationService from '../../../infra/api-side/car-registration-service'

const makeLoadVehiclesByPlateNumber = () => {
  const carRegistration = new CarRegistrationService()
  const LoadReportsByPlateNumberUseCase = new LoadVehiclesByPlateNumber(
    carRegistration
  )
  return LoadReportsByPlateNumberUseCase
}

export default makeLoadVehiclesByPlateNumber

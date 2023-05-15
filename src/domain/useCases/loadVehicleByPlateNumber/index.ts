import { LoadVehiclesByPlateNumber } from './loadVehicleByPlateNumber'
import VehicleService from '../../../infra/api-core/vehicles-resourse'

const makeLoadVehiclesByPlateNumber = () => {
  const vehicleProvider = new VehicleService()
  const LoadReportsByPlateNumberUseCase = new LoadVehiclesByPlateNumber(
    vehicleProvider
  )
  return LoadReportsByPlateNumberUseCase
}

export default makeLoadVehiclesByPlateNumber

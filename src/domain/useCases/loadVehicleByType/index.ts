import { LoadVehiclesByType } from './loadVehicleByType'
import VehicleService from '../../../infra/api-core/vehicles-resourse'

const makeLoadVehiclesByType = () => {
  const vehicleProvider = new VehicleService()
  const LoadReportsByTypeUseCase = new LoadVehiclesByType(vehicleProvider)
  return LoadReportsByTypeUseCase
}

export default makeLoadVehiclesByType

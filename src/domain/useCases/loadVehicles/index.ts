import VehicleService from '../../../infra/providers/apis/api-core/vehicles-resourse'
import { LoadVehicles } from './loadVehicles'

const makeLoadVehicles = () => {
  const vehicleProvider = new VehicleService()
  const LoadReportsUseCase = new LoadVehicles(vehicleProvider)
  return LoadReportsUseCase
}

export default makeLoadVehicles

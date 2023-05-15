import { LoadVehiclesByColor } from './loadVehicleByColor'
import VehicleService from '../../../infra/api-core/vehicles-resourse'

const makeLoadVehicleByColor = () => {
  const vehicleProvider = new VehicleService()
  const LoadReportsByPeriodUseCase = new LoadVehiclesByColor(vehicleProvider)
  return LoadReportsByPeriodUseCase
}

export default makeLoadVehicleByColor

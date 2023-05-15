import makeLoadVehicleByColor from '../../../src/domain/useCases/loadVehicleByColor'
import makeLoadVehiclesByPlateNumber from '../../../src/domain/useCases/loadVehicleByPlateNumber'
import makeLoadVehiclesByType from '../../../src/domain/useCases/loadVehicleByType'

export const vehicleResolver = {
  Query: {
    loadVehicleByColor(color: string) {
      return makeLoadVehicleByColor().execute(color)
    },
    loadVehicleByType(type: string) {
      return makeLoadVehiclesByType().execute(type)
    },
    loadVehicleByPlateNumber(plateNumber: string) {
      return makeLoadVehiclesByPlateNumber().execute(plateNumber)
    }
  }
}

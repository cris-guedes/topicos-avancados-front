import makeLoadVehicleByColor from '../../../src/domain/useCases/loadVehicleByColor'
import makeLoadVehiclesByPlateNumber from '../../../src/domain/useCases/loadVehicleByPlateNumber'
import makeLoadVehiclesByType from '../../../src/domain/useCases/loadVehicleByType'
import makeLoadVehicles from '../../../src/domain/useCases/loadVehicles'

export const vehicleResolver = {
  Query: {
    loadVehicleByColor(_, { color }) {
      return makeLoadVehicleByColor().execute(color)
    },
    loadVehicleByType(_, { type }) {
      return makeLoadVehiclesByType().execute(type)
    },
    loadVehicleByPlateNumber(_, { plateNumber }) {
      console.log(plateNumber)
      return makeLoadVehiclesByPlateNumber().execute(plateNumber)
    },
    loadVehicles() {
      return makeLoadVehicles().execute()
    }
  }
}

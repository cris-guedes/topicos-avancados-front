import VehicleService from '../../../infra/api-core/vehicles-resourse'

export class LoadVehiclesByPlateNumber {
  constructor(private readonly vehicleProvider: VehicleService) {}

  async execute(plateNumber: string) {
    return await this.vehicleProvider.loadVehiclesByPlateNumber({
      plate: plateNumber
    })
  }
}

import VehicleService from '../../../infra/api-core/vehicles-resourse'

export class LoadVehiclesByColor {
  constructor(private readonly vehicleProvider: VehicleService) {}

  async execute(color: string) {
    return await this.vehicleProvider.loadVehiclesByColor({ color })
  }
}

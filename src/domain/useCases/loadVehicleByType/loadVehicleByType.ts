import VehicleService from '../../../infra/api-core/vehicles-resourse'

export class LoadVehiclesByType {
  constructor(private readonly vehicleProvider: VehicleService) {}

  async execute(type: string) {
    return await this.vehicleProvider.loadVehiclesByType({ type })
  }
}

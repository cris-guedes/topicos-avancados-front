import VehicleService from '../../../infra/providers/apis/api-core/vehicles-resourse'

export class LoadVehiclesByType {
  constructor(private readonly vehicleProvider: VehicleService) {}

  async execute(type: string) {
    return await this.vehicleProvider.loadByType({ type })
  }
}

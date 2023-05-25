import VehicleService from '../../../infra/providers/apis/api-core/vehicles-resourse'

export class LoadVehicles {
  constructor(private readonly vehicleProvider: VehicleService) {}

  async execute() {
    return await this.vehicleProvider.load()
  }
}

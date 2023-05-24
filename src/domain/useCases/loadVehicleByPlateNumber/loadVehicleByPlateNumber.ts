import VehicleService from '../../../infra/providers/apis/api-core/vehicles-resourse'
import CarRegistrationService from '../../../infra/api-side/car-registration-service'

export class LoadVehiclesByPlateNumber {
  constructor(
    private readonly carRegistrationProvider: CarRegistrationService
  ) {}

  async execute(plateNumber: string) {
    return await this.carRegistrationProvider.loadCarRegistrationByPlateNumber({
      plate: plateNumber
    })
  }
}
